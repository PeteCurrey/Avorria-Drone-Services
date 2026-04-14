import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@altitude-hire.com'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const supabase = await createClient()

    // 1. Save to Supabase
    const { email, name, message, type, ...metadata } = data
    
    // Normalize data for the 'leads' table
    const leadData = {
      full_name: name,
      email_address: email,
      message_body: message || '',
      lead_type: type || 'standard', // 'standard' or 'brief'
      metadata: metadata, // Store extra brief info as JSONB
      status: 'new',
      created_at: new Date().toISOString(),
    }

    const { error: dbError } = await supabase
      .from('leads')
      .insert([leadData])

    if (dbError) {
      console.error('Database Error:', dbError)
      // We continue even if DB fails so user gets the email at least, 
      // but in production you might want to return an error.
    }

    // 2. Send Email Notification via Resend
    if (resend) {
      await resend.emails.send({
        from: 'Altitude Operations <ops@altitude-hire.com>',
        to: ADMIN_EMAIL,
        subject: `[NEW LEAD] ${type === 'brief' ? 'Project Brief' : 'Contact Enquiry'} - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080808; color: #fff; padding: 40px; border: 1px solid #c8a96e;">
            <h1 style="color: #c8a96e; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Signal Received</h1>
            <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Type: ${type || 'Standard'}</p>
            <hr style="border: none; border-top: 1px solid #1a1a1a; margin: 20px 0;" />
            <div style="margin-bottom: 20px;">
              <strong style="color: #c8a96e;">From:</strong> ${name} (${email})
            </div>
            <div style="margin-bottom: 20px;">
              <strong style="color: #c8a96e;">Message:</strong><br />
              <p style="color: #ccc; line-height: 1.6;">${message || 'No additional message.'}</p>
            </div>
            ${type === 'brief' ? `
              <div style="background: #111; padding: 20px; border-left: 2px solid #c8a96e;">
                <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase;">Technical Brief Data</h3>
                <pre style="font-size: 12px; color: #888; white-space: pre-wrap;">${JSON.stringify(metadata, null, 2)}</pre>
              </div>
            ` : ''}
            <hr style="border: none; border-top: 1px solid #1a1a1a; margin: 30px 0;" />
            <p style="font-size: 10px; color: #444; text-align: center;">ID: ${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
        `
      })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Failed to process signal' }, { status: 500 })
  }
}

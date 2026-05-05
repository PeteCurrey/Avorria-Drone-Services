import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()

    // 1. Fetch basic counts
    const { count: visitorCount } = await supabase
      .from('analytics_events')
      .select('*', { count: 'exact', head: true })

    const { count: leadCount } = await supabase
      .from('leads')
      .select('*', { count: 'exact', head: true })

    // 2. Fetch conversions (leads) with attribution
    const { data: leads } = await supabase
      .from('leads')
      .select('attribution, created_at, lead_type')
      .order('created_at', { ascending: false })

    // 3. Fetch top pages
    const { data: pageEvents } = await supabase
      .from('analytics_events')
      .select('page_url, event_name')
      .eq('event_name', 'page_view')

    // Simple aggregation for top pages
    const pageViews: Record<string, number> = {}
    pageEvents?.forEach(event => {
      pageViews[event.page_url] = (pageViews[event.page_url] || 0) + 1
    })

    const topPages = Object.entries(pageViews)
      .map(([url, views]) => ({ url, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5)

    // 4. Source performance from leads
    const sourceStats: Record<string, number> = {}
    leads?.forEach(lead => {
      const attr = lead.attribution as any
      const source = attr?.first_touch_source || 'direct'
      const medium = attr?.first_touch_medium || 'none'
      const key = `${source} / ${medium}`
      sourceStats[key] = (sourceStats[key] || 0) + 1
    })

    const sourcePerformance = Object.entries(sourceStats)
      .map(([source, leads]) => ({ source, leads }))
      .sort((a, b) => b.leads - a.leads)
      .slice(0, 5)

    // 5. Service breakdown
    const serviceStats: Record<string, number> = {}
    leads?.forEach(lead => {
      const meta = lead.metadata as any
      const service = meta?.serviceInterest || 'Other'
      serviceStats[service] = (serviceStats[service] || 0) + 1
    })

    const serviceBreakdown = Object.entries(serviceStats)
      .map(([service, leads]) => ({ service, leads }))
      .sort((a, b) => b.leads - a.leads)

    return NextResponse.json({
      metrics: {
        visitors: visitorCount || 0,
        leads: leadCount || 0,
        conversionRate: visitorCount ? ((leadCount || 0) / visitorCount * 100).toFixed(2) + '%' : '0%',
      },
      topPages,
      sourcePerformance,
      serviceBreakdown
    })
  } catch (error) {
    console.error('Analytics Summary API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

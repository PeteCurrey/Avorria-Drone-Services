-- Altitude Hire ADMIN DASHBOARD MIGRATION
-- Execute this in the Supabase SQL Editor

-- 1. LEADS TABLE (CRM)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email_address TEXT NOT NULL,
    message_body TEXT,
    lead_type TEXT DEFAULT 'standard', -- 'standard' or 'brief'
    status TEXT DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'archived'
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. CASE STUDIES TABLE (CMS)
CREATE TABLE IF NOT EXISTS public.case_studies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    industry TEXT,
    location TEXT,
    client_name TEXT,
    main_image TEXT,
    story_beats JSONB DEFAULT '[]'::jsonb, -- Array of {type: 'text'|'image'|'video', content: text, caption?: text}
    is_published BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. ENABLE RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- 4. POLICIES
-- Leads: Public can insert, only authenticated can read/write
CREATE POLICY "Public can create leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can manage leads" ON public.leads FOR ALL USING (auth.role() = 'authenticated');

-- Case Studies: Public can read published, only authenticated can manage
CREATE POLICY "Public can read published case studies" ON public.case_studies FOR SELECT USING (is_published = true);
CREATE POLICY "Admin can manage case studies" ON public.case_studies FOR ALL USING (auth.role() = 'authenticated');

-- 5. FUNCTION: UPDATE_UPDATED_AT
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON public.case_studies FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

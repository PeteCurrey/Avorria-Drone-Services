-- Migration: 002_analytics_attribution.sql

-- First-party event tracking table
CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_name TEXT NOT NULL,
    visitor_id TEXT NOT NULL,
    session_id TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT now(),
    page_url TEXT,
    page_title TEXT,
    page_type TEXT,
    source_page TEXT,
    source_cta TEXT,
    service TEXT,
    location TEXT,
    sector TEXT,
    bundle TEXT,
    output_family TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_content TEXT,
    utm_term TEXT,
    referrer TEXT,
    device_type TEXT,
    browser TEXT,
    properties_json JSONB,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for analytics queries
CREATE INDEX IF NOT EXISTS idx_analytics_event_name ON public.analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_visitor_id ON public.analytics_events(visitor_id);
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON public.analytics_events(timestamp);

-- Policy for public insertion (Privacy-conscious)
-- Note: In a production environment, you might want to restrict this further 
-- or use an API route to sanitize data before insertion.
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public event insertion" ON public.analytics_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin to read analytics" ON public.analytics_events FOR SELECT USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

-- Extend Leads table with attribution fields if not exists
-- (Assuming 'leads' table from previous migrations)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='leads' AND column_name='attribution') THEN
        ALTER TABLE public.leads ADD COLUMN attribution JSONB;
    END IF;
END $$;

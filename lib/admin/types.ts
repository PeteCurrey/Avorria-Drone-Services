export type LeadStatus = 'New' | 'Reviewed' | 'Contacted' | 'Awaiting info' | 'Ready to quote' | 'Quoted' | 'Won' | 'Lost' | 'Nurture' | 'Archived'

export interface Lead {
  id: string
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  serviceSelected?: string
  bundleRecommended?: string
  location: string
  sector: string
  urgency: 'Low' | 'Medium' | 'High' | 'Critical'
  leadScore: number
  status: LeadStatus
  createdAt: string
  source: string
  notes?: string[]
  deliverables?: string[]
  budget?: string
  details?: string
}

export type QuoteStatus = 'Draft' | 'Sent' | 'Follow-up' | 'Won' | 'Lost' | 'Nurture'

export interface Quote {
  id: string
  leadId: string
  clientName: string
  company: string
  service: string
  bundle?: string
  location: string
  value: number
  status: QuoteStatus
  createdAt: string
  sentAt?: string
  followUpDate?: string
  outcome?: string
}

export type PageStatus = 'Draft' | 'Review' | 'Ready' | 'Published' | 'Noindex' | 'Needs Improvement' | 'Archived'

export interface SeoPage {
  id: string
  title: string
  url: string
  status: PageStatus
  qualityScore: number
  impressions: number
  clicks: number
  ctr: number
  leadsGenerated: number
  lastUpdated: string
}

export interface ContentWarning {
  id: string
  type: 'SEO' | 'Content' | 'Asset' | 'Compliance'
  severity: 'Low' | 'Medium' | 'High' | 'Critical'
  message: string
  pageUrl: string
  pageTitle: string
}

export interface AnalyticsSummary {
  visitors: number
  toolStarts: number
  toolCompletions: number
  briefStarts: number
  briefSubmissions: number
  leads: number
  quotesSent: number
  wonProjects: number
}

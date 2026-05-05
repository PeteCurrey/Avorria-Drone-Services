import { Lead, Quote, SeoPage, ContentWarning, AnalyticsSummary } from './types'

export const MOCK_LEADS: Lead[] = [
  {
    id: 'L-001',
    name: 'Sarah Jenkins',
    company: 'Skyline Construction',
    email: 's.jenkins@skyline.co.uk',
    phone: '020 7946 0123',
    projectType: 'Roof Inspection',
    serviceSelected: 'roof-inspections',
    bundleRecommended: 'roof-intelligence',
    location: 'London',
    sector: 'Construction',
    urgency: 'High',
    leadScore: 88,
    status: 'New',
    createdAt: '2026-05-04T14:20:00Z',
    source: '/services/roof-inspections',
    budget: '£2k - £5k'
  },
  {
    id: 'L-002',
    name: 'Mark Thompson',
    company: 'Global Asset Management',
    email: 'm.thompson@globalam.com',
    phone: '0161 496 0789',
    projectType: 'Asset Auditing',
    serviceSelected: 'building-envelope-inspections',
    bundleRecommended: 'building-envelope',
    location: 'Manchester',
    sector: 'Facilities Management',
    urgency: 'Medium',
    leadScore: 72,
    status: 'Reviewed',
    createdAt: '2026-05-03T11:15:00Z',
    source: '/sectors/facilities-management',
    budget: '£10k+'
  },
  {
    id: 'L-003',
    name: 'David Wilson',
    company: 'Heritage Trust',
    email: 'd.wilson@heritagetrust.org',
    phone: '0117 496 0555',
    projectType: 'Restoration Surveys',
    serviceSelected: 'heritage-conservation-archaeology',
    location: 'Bristol',
    sector: 'Heritage',
    urgency: 'Low',
    leadScore: 45,
    status: 'Nurture',
    createdAt: '2026-05-01T09:45:00Z',
    source: '/services/heritage-conservation-archaeology'
  }
]

export const MOCK_QUOTES: Quote[] = [
  {
    id: 'Q-4021',
    leadId: 'L-001',
    clientName: 'Sarah Jenkins',
    company: 'Skyline Construction',
    service: 'Roof Inspection',
    bundle: 'Roof Intelligence Pack',
    location: 'London',
    value: 3250,
    status: 'Draft',
    createdAt: '2026-05-04T16:00:00Z'
  },
  {
    id: 'Q-4018',
    leadId: 'L-002',
    clientName: 'Mark Thompson',
    company: 'Global Asset Management',
    service: 'Facade Audit',
    bundle: 'Building Envelope & Asset Condition Pack',
    location: 'Manchester',
    value: 12400,
    status: 'Sent',
    createdAt: '2026-04-28T10:30:00Z',
    sentAt: '2026-04-29T14:00:00Z',
    followUpDate: '2026-05-06T09:00:00Z'
  }
]

export const MOCK_SEO_PAGES: SeoPage[] = [
  {
    id: 'S-001',
    title: 'Drone Roof Inspections London',
    url: '/industries/construction/roof-inspections-london',
    status: 'Published',
    qualityScore: 94,
    impressions: 12400,
    clicks: 850,
    ctr: 6.8,
    leadsGenerated: 24,
    lastUpdated: '2026-04-15T12:00:00Z'
  },
  {
    id: 'S-002',
    title: 'Agricultural Drone Mapping Bristol',
    url: '/industries/agriculture/drone-mapping-bristol',
    status: 'Needs Improvement',
    qualityScore: 58,
    impressions: 3200,
    clicks: 45,
    ctr: 1.4,
    leadsGenerated: 2,
    lastUpdated: '2026-04-20T09:30:00Z'
  }
]

export const MOCK_WARNINGS: ContentWarning[] = [
  {
    id: 'W-001',
    type: 'Compliance',
    severity: 'High',
    message: 'Risky claim detected: "Millimetre accurate"',
    pageUrl: '/services/surveying-mapping',
    pageTitle: 'Surveying & Mapping'
  },
  {
    id: 'W-002',
    type: 'SEO',
    severity: 'Medium',
    message: 'Missing meta description',
    pageUrl: '/industries/agriculture/drone-mapping-bristol',
    pageTitle: 'Agricultural Drone Mapping Bristol'
  }
]

export const MOCK_ANALYTICS: AnalyticsSummary = {
  visitors: 45200,
  toolStarts: 1240,
  toolCompletions: 850,
  briefStarts: 320,
  briefSubmissions: 145,
  leads: 124,
  quotesSent: 58,
  wonProjects: 22
}

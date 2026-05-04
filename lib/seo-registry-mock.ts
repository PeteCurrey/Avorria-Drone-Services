import { SeoLandingPage } from './seo-types';

// Mock empty analytics
const defaultAnalytics = {
  impressions: 0,
  clicks: 0,
  ctr: 0,
  averagePosition: 0,
  sessions: 0,
  engagedSessions: 0,
  engagementRate: 0,
  conversions: 0,
  conversionRate: 0,
  formSubmissions: 0,
  callClicks: 0,
  briefingFormStarts: 0,
  briefingFormCompletions: 0,
  topQueries: []
};

const defaultQuality = {
  thinContentWarning: false,
  duplicateRiskWarning: false,
  missingLocalRelevanceWarning: false,
  missingSectorRelevanceWarning: false,
  missingCtaWarning: false,
  missingFaqWarning: false,
  missingBundleLinkWarning: false,
  missingServiceLinkWarning: false,
  missingLocationLinkWarning: false,
  overclaimingRiskWarning: false,
  humanReviewRequired: false,
  qualityScore: 85
};

export const mockSeoPages: SeoLandingPage[] = [
  {
    pageId: 'seo-1',
    pageType: 'service_location',
    urlSlug: 'drone-roof-inspections',
    fullUrl: '/drone-services/london/drone-roof-inspections',
    canonicalUrl: 'https://altitude-hire.com/drone-services/london/drone-roof-inspections',
    parentService: 'roof-inspections',
    parentLocation: 'london',
    targetKeyword: 'drone roof inspection london',
    secondaryKeywords: ['commercial roof survey london', 'drone roof surveyor london'],
    searchIntent: 'Commercial intent - seeking local provider',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Roof Inspections London | Altitude Hire',
    metaDescription: 'Commercial drone roof inspections in London. High-resolution condition evidence for facilities management, surveyors and property agents without scaffolding.',
    h1: 'Drone Roof Inspections in London',
    h2Outline: ['Why use drones for London roofs', 'What we capture', 'Deliverables', 'Local constraints and airspace', 'FAQs'],
    wordCount: 850,
    contentUniquenessScore: 92,
    internalLinksCount: 12,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: {
      ...defaultQuality,
      qualityScore: 92
    },
    analytics: {
      ...defaultAnalytics,
      impressions: 1250,
      clicks: 45,
      ctr: 0.036,
      averagePosition: 8.4,
      sessions: 40,
      conversions: 2
    }
  },
  {
    pageId: 'seo-2',
    pageType: 'service_sector',
    urlSlug: 'drone-roof-inspections',
    fullUrl: '/industries/facilities-management/drone-roof-inspections',
    canonicalUrl: 'https://altitude-hire.com/industries/facilities-management/drone-roof-inspections',
    parentService: 'roof-inspections',
    parentSector: 'facilities-management',
    targetKeyword: 'drone roof inspections for facilities managers',
    secondaryKeywords: ['FM drone roof survey', 'drone property inspection for FM'],
    searchIntent: 'B2B service research',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Roof Inspections for Facilities Management | Altitude Hire',
    metaDescription: 'Visual roof inspection data for facilities managers. Safer, faster condition reporting for planned maintenance and contractor scoping.',
    h1: 'Drone Roof Inspections for Facilities Management',
    h2Outline: ['FM Roof Inspection Workflows', 'What we capture', 'Reporting Deliverables', 'Recommended Packages', 'FAQs'],
    wordCount: 950,
    contentUniquenessScore: 88,
    internalLinksCount: 8,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: {
      ...defaultQuality,
      qualityScore: 88
    },
    analytics: {
      ...defaultAnalytics,
      impressions: 420,
      clicks: 12,
      ctr: 0.028,
      averagePosition: 12.1,
      sessions: 10,
      conversions: 1
    }
  },
  {
    pageId: 'seo-3',
    pageType: 'service_location_sector',
    urlSlug: 'drone-roof-inspections',
    fullUrl: '/seo/london/facilities-management/drone-roof-inspections',
    canonicalUrl: 'https://altitude-hire.com/seo/london/facilities-management/drone-roof-inspections',
    parentService: 'roof-inspections',
    parentLocation: 'london',
    parentSector: 'facilities-management',
    targetKeyword: 'drone roof inspections for facilities managers in london',
    secondaryKeywords: ['london fm drone survey', 'commercial property roof survey london fm'],
    searchIntent: 'Highly specific commercial B2B',
    status: 'Draft',
    indexabilityStatus: 'Noindex',
    seoTitle: 'Drone Roof Inspections for Facilities Managers in London',
    metaDescription: 'Specialist drone roof surveys for London facilities management teams.',
    h1: 'Drone Roof Inspections for Facilities Managers in London',
    h2Outline: ['London FM Context', 'Airspace challenges', 'Deliverables', 'FAQs'],
    wordCount: 300,
    contentUniquenessScore: 40,
    internalLinksCount: 3,
    outboundLinksCount: 0,
    hasSchema: false,
    hasFaq: false,
    sitemapInclusionStatus: false,
    lastUpdatedDate: new Date().toISOString(),
    quality: {
      ...defaultQuality,
      thinContentWarning: true,
      missingFaqWarning: true,
      missingBundleLinkWarning: true,
      humanReviewRequired: true,
      qualityScore: 45
    },
    analytics: defaultAnalytics
  },
  {
    pageId: 'seo-4',
    pageType: 'outcome',
    urlSlug: 'drone-evidence-for-insurance-claims',
    fullUrl: '/outcomes/drone-evidence-for-insurance-claims',
    canonicalUrl: 'https://altitude-hire.com/outcomes/drone-evidence-for-insurance-claims',
    targetOutcome: 'Insurance Evidence',
    targetKeyword: 'drone evidence for insurance claims',
    secondaryKeywords: ['drone survey for storm damage', 'aerial roof damage evidence'],
    searchIntent: 'Problem-solving / urgent need',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Evidence for Insurance Claims | Altitude Hire',
    metaDescription: 'Rapid aerial evidence capture for property insurance claims. Safe, high-resolution imagery for storm, fire or flood damage assessment.',
    h1: 'Drone Evidence for Property Insurance Claims',
    h2Outline: ['Why use drones for claims', 'Types of damage', 'Deliverables for loss adjusters', 'Response times', 'FAQs'],
    wordCount: 1100,
    contentUniquenessScore: 95,
    internalLinksCount: 15,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: {
      ...defaultQuality,
      qualityScore: 95
    },
    analytics: {
      ...defaultAnalytics,
      impressions: 890,
      clicks: 65,
      ctr: 0.073,
      averagePosition: 4.2,
      sessions: 60,
      conversions: 5
    }
  }
];

// Helper to filter/find
export const getSeoPageByUrl = (url: string) => {
  return mockSeoPages.find(p => p.fullUrl === url);
};

export const getPublishedSeoPages = () => {
  return mockSeoPages.filter(p => p.status === 'Published' && p.indexabilityStatus === 'Index');
};

export const getPagesRequiringImprovement = () => {
  return mockSeoPages.filter(p => p.quality.qualityScore < 75 || p.quality.thinContentWarning);
};

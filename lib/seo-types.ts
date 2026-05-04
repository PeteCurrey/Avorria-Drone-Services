export type SeoPageType = 
  | 'service_location' 
  | 'service_sector' 
  | 'service_location_sector' 
  | 'outcome' 
  | 'bundle_location' 
  | 'comparison' 
  | 'cost' 
  | 'problem';

export type SeoPageStatus = 'Draft' | 'Review' | 'Published' | 'Noindex' | 'Needs improvement' | 'Archived';

export type IndexabilityStatus = 'Index' | 'Noindex' | 'Draft' | 'Canonicalised' | 'Archived';

export interface SeoAnalytics {
  impressions: number;
  clicks: number;
  ctr: number;
  averagePosition: number;
  sessions: number;
  engagedSessions: number;
  engagementRate: number;
  conversions: number;
  conversionRate: number;
  formSubmissions: number;
  callClicks: number;
  briefingFormStarts: number;
  briefingFormCompletions: number;
  topQueries: string[];
}

export interface QualityFields {
  thinContentWarning: boolean;
  duplicateRiskWarning: boolean;
  missingLocalRelevanceWarning: boolean;
  missingSectorRelevanceWarning: boolean;
  missingCtaWarning: boolean;
  missingFaqWarning: boolean;
  missingBundleLinkWarning: boolean;
  missingServiceLinkWarning: boolean;
  missingLocationLinkWarning: boolean;
  overclaimingRiskWarning: boolean;
  humanReviewRequired: boolean;
  qualityScore: number; // 0-100
}

export interface SeoLandingPage {
  pageId: string;
  pageType: SeoPageType;
  urlSlug: string;
  fullUrl: string;
  canonicalUrl: string;
  
  parentService?: string; // slug
  parentLocation?: string; // slug
  parentSector?: string; // slug
  parentBundle?: string; // slug
  targetOutcome?: string;
  
  targetKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  
  status: SeoPageStatus;
  indexabilityStatus: IndexabilityStatus;
  
  // SEO fields
  seoTitle: string;
  metaDescription: string;
  h1: string;
  h2Outline: string[];
  wordCount: number;
  contentUniquenessScore: number;
  internalLinksCount: number;
  outboundLinksCount: number;
  hasSchema: boolean;
  hasFaq: boolean;
  sitemapInclusionStatus: boolean;
  
  lastUpdatedDate: string;
  lastReviewedDate?: string;
  
  quality: QualityFields;
  analytics: SeoAnalytics;
}

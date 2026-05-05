import { SeoLandingPage, QualityFields } from './seo-types';

/**
 * Calculates a quality score for an SEO landing page based on predefined rules.
 * Target score is out of 100.
 */
export function calculateQualityScore(page: Partial<SeoLandingPage>): number {
  let score = 0;

  // 1. Unique Intro & Copy (Word count proxy)
  if (page.wordCount) {
    if (page.wordCount >= 800) score += 20;
    else if (page.wordCount >= 500) score += 10;
  }

  // 2. Local/Sector Context (Presence of H2s with location/sector keywords)
  if (page.h2Outline && (page.parentLocation || page.parentSector)) {
    const contextKeywords = [
      page.parentLocation?.toLowerCase(),
      page.parentSector?.toLowerCase(),
    ].filter(Boolean);
    
    const hasContextInH2 = page.h2Outline.some(h2 => 
      contextKeywords.some(kw => h2.toLowerCase().includes(kw!))
    );
    
    if (hasContextInH2) score += 20;
  }

  // 3. Service Specific Deliverables (Internal links count proxy)
  if (page.internalLinksCount && page.internalLinksCount >= 8) {
    score += 15;
  }

  // 4. Relevant FAQs
  if (page.hasFaq) score += 10;

  // 5. Schema Present
  if (page.hasSchema) score += 10;

  // 6. Internal Linking (Global links)
  if (page.internalLinksCount && page.internalLinksCount >= 4) score += 10;

  // 7. Metadata Complete
  if (page.seoTitle && page.metaDescription && page.h1) score += 10;

  // 8. Uniqueness (Content score)
  if (page.contentUniquenessScore && page.contentUniquenessScore >= 80) score += 5;

  return Math.min(score, 100);
}

/**
 * Generates quality warnings for a page.
 */
export function getQualityWarnings(page: Partial<SeoLandingPage>): Partial<QualityFields> {
  const warnings: Partial<QualityFields> = {
    thinContentWarning: (page.wordCount || 0) < 500,
    missingFaqWarning: !page.hasFaq,
    missingSchemaWarning: !page.hasSchema,
    missingCtaWarning: !page.h1, // Placeholder for actual CTA check
    duplicateRiskWarning: (page.contentUniquenessScore || 0) < 60,
  };

  return warnings;
}

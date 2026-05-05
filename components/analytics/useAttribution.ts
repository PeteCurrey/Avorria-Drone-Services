'use client'

import { getVisitorId, getSessionId, getAttributionContext } from '@/lib/analytics'

/**
 * Hook to provide attribution data for form submissions
 */
export function useAttribution() {
  return {
    getAttributionData: () => {
      const context = getAttributionContext()
      return {
        visitor_id: getVisitorId(),
        session_id: getSessionId(),
        first_touch_url: context.first_touch_url,
        first_touch_source: context.first_touch_source,
        first_touch_medium: context.first_touch_medium,
        first_touch_campaign: context.first_touch_campaign,
        last_touch_url: context.last_touch_url,
        last_touch_source: context.last_touch_source,
        last_touch_medium: context.last_touch_medium,
        last_touch_campaign: context.last_touch_campaign,
        journey_summary: context.journey_summary,
      }
    }
  }
}

'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { captureUtms, trackEvent, recordJourneyStep } from '@/lib/analytics'

function TrackingHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 1. Capture UTMs on arrival
    const utms = captureUtms()
    
    // 2. Determine Page Type from Pathname
    let pageType = 'General'
    if (pathname === '/') pageType = 'Home'
    else if (pathname.startsWith('/services/')) pageType = 'Service'
    else if (pathname.startsWith('/sectors/')) pageType = 'Sector Hub'
    else if (pathname.startsWith('/locations/')) pageType = 'Location'
    else if (pathname.startsWith('/bundles')) pageType = 'Bundle'
    else if (pathname.startsWith('/resources/downloads/')) pageType = 'Lead Magnet'
    else if (pathname.startsWith('/sample-deliverables/')) pageType = 'Sample Deliverable'
    else if (pathname.startsWith('/brief')) pageType = 'Project Brief Tool'
    else if (pathname.startsWith('/cost-estimator')) pageType = 'Cost Estimator Tool'

    // 3. Extract Context from path segments
    const pathParts = pathname.split('/').filter(Boolean)
    const context: Record<string, string> = {
      page_type: pageType
    }

    if (pageType === 'Service') context.service = pathParts[1]
    if (pageType === 'Location') context.location = pathParts[1]
    if (pageType === 'Sector Hub') context.sector = pathParts[1]
    if (pageType === 'Lead Magnet') context.asset_name = pathParts[2]

    // 4. Track Page View
    trackEvent('page_viewed', {
      ...context,
      ...utms
    })

    // 5. Record in Journey Timeline
    recordJourneyStep(`Viewed ${pathname}`)

  }, [pathname, searchParams])

  return null
}

export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <TrackingHandler />
      </Suspense>
      {children}
    </>
  )
}

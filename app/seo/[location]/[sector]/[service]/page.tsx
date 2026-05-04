import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSeoPageByUrl } from '@/lib/seo-registry-mock'
import { buildSeoPageContent } from '@/lib/seo-page-builder'
import SeoPageHero from '@/components/seo/SeoPageHero'
import SeoContextSection from '@/components/seo/SeoContextSection'
import SeoDeliverables from '@/components/seo/SeoDeliverables'
import FAQAccordion from '@/components/ui/FAQAccordion'

interface PageProps {
  params: Promise<{ location: string; sector: string; service: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location, sector, service } = await params
  const fullUrl = `/seo/${location}/${sector}/${service}`
  const pageDef = getSeoPageByUrl(fullUrl)
  
  if (!pageDef || pageDef.indexabilityStatus !== 'Index') return {}

  return {
    title: pageDef.seoTitle,
    description: pageDef.metaDescription,
    alternates: {
      canonical: pageDef.canonicalUrl
    }
  }
}

export default async function ServiceLocationSectorPage({ params }: PageProps) {
  const { location, sector, service } = await params
  const fullUrl = `/seo/${location}/${sector}/${service}`
  
  const pageDef = getSeoPageByUrl(fullUrl)
  const content = buildSeoPageContent(fullUrl, location, sector, service)

  if (!pageDef || !content || pageDef.indexabilityStatus !== 'Index') {
    notFound()
  }

  return (
    <main className="min-h-screen bg-dark pb-32">
      <SeoPageHero 
        h1={content.hero.h1}
        subheading={content.hero.subheading}
        ctaPrimary={content.hero.ctaPrimary}
        ctaSecondary={content.hero.ctaSecondary}
        trustLine={content.hero.trustLine}
        locationSlug={location}
        sectorSlug={sector}
        serviceSlug={service}
      />

      <SeoContextSection 
        heading={content.context.heading}
        body={content.context.body}
        considerationsHeading={content.localOrSectorConsiderations.heading}
        considerations={content.localOrSectorConsiderations.items}
      />

      <SeoDeliverables 
        captureList={content.captureList}
        deliverablesList={content.deliverablesList}
        recommendedBundle={content.recommendedBundle}
      />

      {/* FAQs */}
      {content.faqs.length > 0 && (
        <section className="py-32 px-10 md:px-20 bg-dark">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl text-white mb-16 uppercase tracking-tighter">Common Questions</h2>
            <FAQAccordion faqs={content.faqs} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="mt-20 px-10 md:px-20 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">{content.finalCta.headline}</h2>
        <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed mb-10">
          {content.finalCta.body}
        </p>
        <Link 
          href={`/brief?service=${service}&location=${location}&sector=${sector}`} 
          className="inline-flex items-center gap-4 bg-accent text-dark px-10 py-5 font-display text-2xl tracking-[0.1em] hover:bg-white transition-all"
        >
          {content.finalCta.cta} <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  )
}

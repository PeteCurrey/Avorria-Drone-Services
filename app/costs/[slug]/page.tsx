import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'
import { getSeoPageByUrl } from '@/lib/seo-registry-mock'
import { buildSeoPageContent } from '@/lib/seo-page-builder'
import SeoPageHero from '@/components/seo/SeoPageHero'
import FAQAccordion from '@/components/ui/FAQAccordion'
import SectionTag from '@/components/ui/SectionTag'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const fullUrl = `/costs/${slug}`
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

export default async function CostPage({ params }: PageProps) {
  const { slug } = await params
  const fullUrl = `/costs/${slug}`
  
  const pageDef = getSeoPageByUrl(fullUrl)
  const content = buildSeoPageContent(fullUrl, undefined, undefined, slug)

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
      />

      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Pricing Factors" /></div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-none">
              How Drone Commercial Pricing is Structured
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-8">
              Altitude Hire does not provide arbitrary fixed prices. Commercial drone operations are priced according to the required output, site constraints, processing time, and the complexity of the capture workflow.
            </p>
            <div className="flex items-start gap-4 p-6 border border-white/10 bg-white/[0.02]">
               <Info className="w-5 h-5 text-accent mt-1 shrink-0" />
               <p className="font-ui text-[11px] tracking-widest uppercase text-white/60">
                 The most efficient way to get an exact cost for your project is to submit a brief outlining the site location and required deliverables.
               </p>
            </div>
          </div>
          
          <div className="p-10 border border-white/10 bg-dark">
             <h3 className="font-ui text-[12px] tracking-[0.3em] uppercase text-accent mb-8">Cost Variables</h3>
             <ul className="space-y-6">
               {[
                 'Site Size & Flight Time Required',
                 'Location & Airspace Complexity (e.g. Central London vs Rural)',
                 'Deliverable Requirements (Raw Data vs Processed 3D Models)',
                 'Specialist Sensors Required (Thermal, LiDAR, RTK)',
                 'Risk Profile & Required Clearances',
                 'Frequency of Capture (One-off vs Monthly Progress)'
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4">
                   <div className="w-1.5 h-1.5 bg-accent/50 rounded-full mt-2 shrink-0" />
                   <span className="font-body text-[11px] text-white/60 uppercase tracking-widest leading-relaxed">
                     {item}
                   </span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

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
        <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">Get a Project Quote</h2>
        <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed mb-10">
          Tell us what you need to inspect, measure, monitor, film or visualise. We will review the site and required output, then provide a clear, exact quote.
        </p>
        <Link 
          href={`/brief`} 
          className="inline-flex items-center gap-4 bg-accent text-dark px-10 py-5 font-display text-2xl tracking-[0.1em] hover:bg-white transition-all"
        >
          Start Project Brief <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  )
}

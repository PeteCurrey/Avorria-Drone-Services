import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeftRight } from 'lucide-react'
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
  const fullUrl = `/compare/${slug}`
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

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params
  const fullUrl = `/compare/${slug}`
  
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
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="01" text="Comparison" /></div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-none">
            Methodology & Output Comparison
          </h2>
          <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-16 max-w-3xl mx-auto">
            Selecting the right workflow depends on your required accuracy, the visual context needed, and the ultimate purpose of the deliverable. We don&apos;t advocate for drone capture when a traditional method is superior—we advocate for the right tool for the job.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 text-left">
             <div className="bg-dark p-12">
                <h3 className="font-display text-2xl text-accent uppercase tracking-widest mb-6">Aerial Drone Workflow</h3>
                <ul className="space-y-4">
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">Rapid deployment and capture</li>
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">High-level or hard-to-reach access</li>
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">Reduces health and safety risks</li>
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">Comprehensive visual context</li>
                </ul>
             </div>
             <div className="bg-dark p-12 relative">
                <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center z-10 hidden md:flex">
                  <ArrowLeftRight className="w-5 h-5 text-white/40" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-6">Traditional / Alternative Method</h3>
                <ul className="space-y-4">
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">Physical or tactile inspection</li>
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">Ground-level fixed positioning</li>
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">Often requires scaffolding or MEWPs</li>
                  <li className="font-body text-xs text-white/60 uppercase tracking-widest leading-relaxed">Specific ground-based survey control</li>
                </ul>
             </div>
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
        <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">Discuss Your Requirement</h2>
        <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed mb-10">
          Not sure which capture method is right for your site? Tell us your goal and we will recommend the correct workflow.
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

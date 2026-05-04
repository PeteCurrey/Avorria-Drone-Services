import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react'
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
  const fullUrl = `/solutions/${slug}`
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

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params
  const fullUrl = `/solutions/${slug}`
  
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
            <div className="svc-tag mb-8"><SectionTag number="01" text="The Challenge" /></div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-none flex items-center gap-4">
              <AlertCircle className="w-8 h-8 text-yellow-500 shrink-0" /> Identifying the Problem
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-8">
              Commercial projects frequently encounter constraints around access, safety, speed, or data quality. Traditional methods often scale poorly when immediate, high-fidelity visual evidence is required across a large or complex site.
            </p>
          </div>
          
          <div className="p-10 border border-white/10 bg-dark">
             <h3 className="font-display text-2xl tracking-widest uppercase text-accent mb-8 flex items-center gap-3">
               <CheckCircle2 className="w-6 h-6 shrink-0" /> The Aerial Solution
             </h3>
             <p className="font-body text-sm text-white/60 uppercase tracking-widest leading-relaxed mb-6">
               By deploying a specific drone capture workflow, we bypass many ground-level constraints. Our approach focuses on delivering the exact data you need to solve the operational problem, rather than just capturing generic imagery.
             </p>
             <ul className="space-y-4 pt-6 border-t border-white/10">
               {[
                 'Rapid deployment without heavy access equipment',
                 'High-resolution, verifiable visual data',
                 'Improved safety by keeping personnel on the ground',
                 'Actionable deliverables tailored to your workflow'
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4 text-white/40 font-ui text-[10px] tracking-widest uppercase">
                   <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1 shrink-0" />
                   {item}
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
        <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">Solve This Requirement</h2>
        <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed mb-10">
          Tell us about the site and the exact problem you need to solve. We will recommend the fastest and safest aerial capture method.
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

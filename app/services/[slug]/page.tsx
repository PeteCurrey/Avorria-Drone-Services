// app/services/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { servicesData } from '@/lib/services-data'
import VideoBackground from '@/components/ui/VideoBackground'
import FAQAccordion from '@/components/ui/FAQAccordion'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find(s => s.slug === slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://altitude-hire.com/services/${slug}`,
      images: [{ url: '/images/og-default.jpg' }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = servicesData.find(s => s.slug === slug)
  if (!service) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Altitude Drone',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.capabilities.map((cap, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cap.title,
          description: cap.description,
        },
      })),
    },
  }

  return (
    <main className="bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src={`/videos/${service.slug}.mp4`} 
          poster={`/images/posters/${service.slug}.jpg`}
          alt={`${service.title} cinematic background`}
          brightness={0.35} 
          isHero={true}
        />
        <div className="grid-lines" />
        <div className="noise-overlay" />
        
        <div className="container relative z-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-8 translate-y-4 opacity-0 animate-[fade-up_0.8s_0.2s_forwards]">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">{service.title}</span>
            </div>
            
            <h1 className="font-display text-[15vw] md:text-[8vw] leading-[0.85] text-white mb-12">
              {service.headline.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <span className={`block translate-y-full animate-[reveal-up_1s_forwards] ${i === service.headline.length - 1 && service.slug === 'drone-inspection' ? 'text-accent' : ''}`} style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}>
                    {line}
                  </span>
                </div>
              ))}
            </h1>

            <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-[600px] mb-12 opacity-0 animate-[fade-in_1s_1s_forwards]">
              {service.intro}
            </p>

            {/* Stats Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 opacity-0 animate-[fade-in_1s_1.2s_forwards]">
              {service.heroStat.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-4xl text-accent mb-2">{stat.value}</div>
                  <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Impact Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-1 py-12 hidden md:block">
              <span className="font-display text-8xl text-white/5 opacity-50 block rotate-90 origin-left translate-x-12">
                IMPACT
              </span>
            </div>
            <div className="md:col-span-5">
              <h2 className="font-display text-5xl md:text-6xl text-white mb-12 leading-none uppercase">
                {service.bodyHeading}
              </h2>
              <div className="space-y-8">
                {service.bodyParagraphs.map((p, i) => (
                  <p key={i} className="font-body text-lg font-light text-white/40 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/5">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="p-10 bg-dark/40 border border-white/5 hover:bg-accent/5 transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-2xl text-white mb-4 tracking-wide">{cap.title}</h3>
                    <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">Key Industrial Targets</h4>
                <div className="flex flex-wrap gap-3">
                  {service.industries.map((ind, i) => (
                    <span key={i} className="px-5 py-2 border border-white/10 font-ui text-[11px] tracking-widest uppercase text-white/60 hover:border-accent hover:text-accent transition-colors">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed FAQ Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="grid-lines opacity-20" />
        <div className="container px-8 md:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Technical Insights</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-12 uppercase">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQAccordion faqs={service.faqs.map(f => ({ question: f.q, answer: f.a }))} />
            </div>
          </div>
        </div>
      </section>

      {/* Retainer / CTA Section */}
      <section className="py-32 border-t border-white/5 bg-[#0a0a0a]">
        <div className="container px-8 md:px-20 text-center">
          <h2 className="font-display text-6xl md:text-8xl text-white mb-8 mb-12">TRANSFORM YOUR<br/><span className="text-accent underline underline-offset-[20px]">PERSPECTIVE</span></h2>
          <p className="font-body text-xl text-white/40 max-w-2xl mx-auto mb-16 uppercase tracking-[0.2em] leading-relaxed">
            Scalable aerial intelligence for the industries building the future of the United Kingdom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href={service.cta.href}
              className="group flex items-center gap-6 bg-accent text-dark px-12 py-6 font-display text-3xl tracking-[0.1em] transition-all hover:bg-white w-full sm:w-auto"
            >
              {service.cta.label} <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
            <Link 
              href="/brief"
              className="font-ui text-[13px] tracking-[0.4em] uppercase text-white/40 hover:text-accent transition-colors"
            >
              Start Project Briefing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

// app/locations/[location]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ArrowRight, Shield, Clock, Target } from 'lucide-react'
import { locationsData } from '@/lib/locations-data'
import { servicesData } from '@/lib/services-data'
import VideoBackground from '@/components/ui/VideoBackground'

interface Props {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    location: loc.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params
  const data = locationsData.find(l => l.slug === location)
  if (!data) return {}

  const title = `Drone Services ${data.name} — Altitude Drone | CAA Approved UAV`
  const description = `Professional drone inspection, surveying, and aerial photography in ${data.name}, ${data.region}. ${data.description} CAA approved pilots, competitive rates.`

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${location}`,
    },
    openGraph: {
      title,
      description,
      url: `https://altitude-hire.com/locations/${location}`,
      images: [{ url: '/images/og-default.jpg' }],
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params
  const data = locationsData.find(l => l.slug === location)
  if (!data) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Altitude Drone — ${data.name}`,
    image: 'https://altitude-hire.com/images/og-default.jpg',
    '@id': `https://altitude-hire.com/locations/${location}`,
    url: `https://altitude-hire.com/locations/${location}`,
    telephone: '+441234000000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      addressRegion: data.region,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCircle',
      itemOffered: { '@type': 'Service', name: 'Drone Services' },
      geoRadius: '50000',
    },
    areaServed: {
      '@type': 'City',
      name: data.name,
    },
  }

  return (
    <main className="bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          poster="/images/hero_poster.jpg"
          alt={`Drone filming over ${data.name}`}
          brightness={0.3} 
        />
        <div className="grid-lines" />
        <div className="noise-overlay" />
        
        <div className="container relative z-10 px-8 md:px-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-8 translate-y-4 opacity-0 animate-[fade-up_0.8s_0.2s_forwards]">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-ui text-[12px] tracking-[0.4em] uppercase text-accent">Strategic Hub · {data.region}</span>
          </div>
          
          <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.85] text-white mb-8">
            DRONE SERVICES<br/>
            <span className="text-accent underline underline-offset-[20px]">{data.name.toUpperCase()}</span>
          </h1>

          <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-3xl mx-auto opacity-0 animate-[fade-in_1s_1s_forwards]">
            {data.description} Altitude Drone provides rapid-response aerial intelligence across the entire {data.name} catchment area.
          </p>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="py-32 border-b border-white/5 relative">
        <div className="container px-8 md:px-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-5xl md:text-6xl text-white mb-8 uppercase leading-none">
                Available Services in {data.name}
              </h2>
              <p className="font-body text-lg text-white/40 uppercase tracking-widest">
                Professional UAV solutions tailored for {data.name}&apos;s industrial and commercial landscape.
              </p>
            </div>
            <Link href="/services" className="font-ui text-[12px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors border-b border-accent pb-2">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, i) => (
              <Link 
                key={i} 
                href={`/${service.slug}-${data.slug}`}
                className="group relative p-10 bg-white/5 border border-white/10 hover:border-accent/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:text-accent transition-all">
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <span className="block font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 group-hover:text-accent transition-colors">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-wider">
                  {service.title.replace('Services UK', '')}
                </h3>
                <p className="font-body text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  Specialist {service.title.toLowerCase()} for projects in the {data.name} area.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Quality Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <Shield className="w-10 h-10 text-accent" />
            <h3 className="font-display text-3xl text-white uppercase mt-4">CAA Approved</h3>
            <p className="font-body text-white/30 leading-relaxed uppercase tracking-tighter text-sm">
              All operations in {data.name} are carried out by GVC licensed pilots under our strict Operational Authorisation.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Clock className="w-10 h-10 text-accent" />
            <h3 className="font-display text-3xl text-white uppercase mt-4">Local Deployment</h3>
            <p className="font-body text-white/30 leading-relaxed uppercase tracking-tighter text-sm">
              Strategically positioned team for rapid mobilization across {data.region} and the surrounding areas.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Target className="w-10 h-10 text-accent" />
            <h3 className="font-display text-3xl text-white uppercase mt-4">Precision Data</h3>
            <p className="font-body text-white/30 leading-relaxed uppercase tracking-tighter text-sm">
              Deliverables compatible with all major BIM, GIS, and engineering software utilized in {data.name}.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5 text-center">
        <div className="container px-8 md:px-20">
          <span className="font-ui text-[11px] tracking-[0.5em] uppercase text-white/30 mb-8 block">Ready to start?</span>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-16 uppercase">
            Book a Pilot in<br/><span className="text-accent">{data.name}</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <Link 
              href="/contact" 
              className="group flex items-center gap-6 bg-accent text-dark px-12 py-6 font-display text-3xl tracking-[0.1em] transition-all hover:bg-white w-full sm:w-auto"
            >
              HIRE A DRONE <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
            <div className="text-left hidden sm:block">
              <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">Response Time</div>
              <div className="font-display text-2xl text-white">UNDER 4 HOURS</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

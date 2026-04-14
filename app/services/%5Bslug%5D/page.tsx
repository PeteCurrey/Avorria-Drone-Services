import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Factory } from 'lucide-react'
import { SERVICE_DETAILS } from '@/lib/data/services'
import { FLEET_ASSETS } from '@/lib/data/fleet'

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const service = SERVICE_DETAILS.find((s) => s.slug === slug)
  
  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-dark">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-end px-10 md:px-20 pb-20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.name} 
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1000px] w-full">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 font-ui text-[10px] tracking-widest text-accent uppercase mb-12 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Core Capability</span>
          </div>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider leading-none">{service.name}</h1>
          <p className="font-body text-xl md:text-2xl text-white/60 mt-8 tracking-wide max-w-[700px] italic">
            "{service.tagline}"
          </p>
        </div>
      </section>

      {/* Overview & Industrial Impact */}
      <section className="py-24 px-10 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-8">
            <Factory className="w-5 h-5 text-accent" />
            <h2 className="font-ui text-[11px] tracking-[0.4em] uppercase text-white/30">Industrial Application</h2>
          </div>
          <p className="font-body text-2xl text-white/70 leading-relaxed mb-16">
            {service.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {service.features.map((feature) => (
              <div key={feature.name} className="group">
                <h4 className="font-display text-xl text-white mb-3 tracking-wide uppercase group-hover:text-accent transition-colors">{feature.name}</h4>
                <p className="font-body text-sm text-white/40 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 self-start">
          <div className="bg-white/[0.03] border border-white/5 p-10">
            <h3 className="font-display text-2xl text-white mb-10 tracking-widest uppercase">Methodology</h3>
            <div className="space-y-10">
              {service.methodology.map((m) => (
                <div key={m.step} className="relative pl-12 border-l border-white/10">
                  <span className="absolute left-[-1px] top-0 w-[1px] h-full bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                  <div className="absolute left-[-12px] top-0 font-ui text-[10px] text-accent font-bold">{m.step}</div>
                  <h5 className="font-ui text-[13px] tracking-widest text-white uppercase mb-2">{m.title}</h5>
                  <p className="font-body text-xs text-white/30 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 px-10 md:px-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="font-display text-4xl text-white tracking-widest mb-16 uppercase text-center md:text-left">MISSION DELIVERABLES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/5">
            {service.deliverables.map((d: any) => (
              <div key={d.name} className="bg-dark p-12 hover:bg-white/[0.01] transition-colors">
                <CheckCircle2 className="w-6 h-6 text-accent mb-6" />
                <h4 className="font-ui text-[14px] tracking-widest text-white uppercase mb-4">{d.name}</h4>
                <p className="font-body text-sm text-white/30 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Integration */}
      <section className="py-32 px-10 md:px-20">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Deployment Ecosystem</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {service.equipment.map((eSlug) => {
            const asset = FLEET_ASSETS.find(a => a.slug === eSlug)
            if (!asset) return null
            return (
              <Link key={eSlug} href={`/fleet/${eSlug}`} className="group block">
                <div className="relative aspect-video mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image src={asset.image} alt={asset.name} fill className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h4 className="font-display text-xl text-white group-hover:text-accent transition-colors tracking-wide uppercase">{asset.name}</h4>
                <p className="font-ui text-[9px] text-white/30 uppercase tracking-widest mt-1">Industrial Platform</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent text-dark">
        <div className="max-w-[1400px] mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <h3 className="font-display text-5xl md:text-7xl tracking-widest leading-none">START YOUR<br/>SURVEY TODAY</h3>
          <div className="max-w-[500px]">
            <p className="font-body text-lg mb-10 opacity-80">Our specialized flight operations team is ready to deploy globally. Let's discuss your project parameters and data requirements.</p>
            <Link href="/brief" className="inline-flex items-center gap-6 bg-dark text-white px-10 py-5 font-display text-xl tracking-widest hover:bg-white hover:text-dark transition-all">
              SUBMIT PROJECT BRIEF <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }))
}

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SERVICE_DETAILS } from '@/lib/data/services'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-start px-10 md:px-20 pt-32 md:pt-40 overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/surveying_poster.png" 
            alt="Altitude Drone Services" 
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[800px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Capabilities</span>
          </div>
          <h1 className="font-display text-8xl text-white mb-8 tracking-wider leading-none">OUR<br/><span className="text-accent underline underline-offset-8">SERVICES</span></h1>
          <p className="font-body text-xl text-white/40 leading-relaxed max-w-[600px] mb-12">
            Comprehensive aerial data solutions engineered for the most demanding commercial sectors. Every mission is defined by rigor, precision, and absolute commitment to data integrity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-10 md:px-20 bg-dark relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5 mx-auto">
          {SERVICE_DETAILS.map((item) => (
            <div key={item.slug} className="bg-dark group">
              <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-b border-white/5">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill
                  className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent" />
              </div>
              <div className="p-10">
                <div className="font-ui text-[9px] tracking-[0.3em] uppercase text-accent mb-4">{item.tagline}</div>
                <h3 className="font-display text-3xl text-white mb-5 tracking-wide">{item.name}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed mb-10">{item.desc}</p>
                <Link 
                  href={`/services/${item.slug}`} 
                  className="inline-flex items-center gap-3 font-ui text-[10px] tracking-widest text-white/70 uppercase hover:text-accent transition-all group/link"
                >
                  EXPLORE CAPABILITY <ArrowRight className="w-3 h-3 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

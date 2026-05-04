'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Activity, 
  ShieldCheck, 
  ClipboardCheck, 
  ChevronRight,
  HelpCircle,
  LayoutDashboard,
  FileText,
  Package,
  Zap,
  Hammer,
  Database
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import VideoBackground from '@/components/ui/VideoBackground'
import FAQAccordion from '@/components/ui/FAQAccordion'

interface ServiceLink {
  name: string
  href: string
  desc: string
}

interface BundleLink {
  name: string
  fit: string
  outputs: string[]
  href: string
}

interface DeliverableLink {
  name: string
  href: string
}

interface SectorLayoutProps {
  slug: string
  title: string
  subtitle: string
  heroVideo?: string
  heroPoster?: string
  badges: string[]
  painPoints: { title: string, text: string }
  useCases: { title: string, href: string }[]
  services: ServiceLink[]
  bundles: BundleLink[]
  deliverables: DeliverableLink[]
  processSteps: { title: string, desc: string }[]
  faqs: { question: string, answer: string }[]
  ctaText: string
  ctaBriefSource: string
  resources?: { title: string, href: string }[]
}

export default function SectorLayout({
  slug,
  title,
  subtitle,
  heroVideo = "/videos/inspection.mp4",
  heroPoster = "/images/hero_poster.jpg",
  badges,
  painPoints,
  useCases,
  services,
  bundles,
  deliverables,
  processSteps,
  faqs,
  ctaText,
  ctaBriefSource,
  resources
}: SectorLayoutProps) {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero */}
      <header className="relative py-48 px-10 md:px-20 bg-dark overflow-hidden">
        <VideoBackground 
          src={heroVideo} 
          poster={heroPoster} 
          brightness={0.3} 
          isHero={true}
        />
        
        <div className="relative z-10 max-w-[1000px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Sector Authority</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-white mb-8 tracking-tighter leading-none uppercase">
            {title}
          </h1>
          <p className="font-body text-xl text-white/60 leading-relaxed mb-12 max-w-[800px] uppercase tracking-widest font-light">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-16">
            <Link href={`/brief?source=${ctaBriefSource}&sector=${slug}`} className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group">
              {ctaText} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/sample-deliverables" className="bg-white text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-accent transition-all text-center">
              View Sample Deliverables
            </Link>
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 items-center font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
            {badges.map((badge, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-accent/30">•</span>}
                {badge}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Pain Points */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Context" /></div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-none">
              {painPoints.title}
            </h2>
            <div className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light space-y-6">
              {painPoints.text.split('\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="bg-dark/50 border border-white/10 p-12 aspect-square flex flex-col justify-center">
            <Target className="w-20 h-20 text-accent/20 mb-10" />
            <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest">Common {title.split(' ').pop()} Use Cases</h3>
            <ul className="space-y-4">
              {useCases.map((uc, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent/50" />
                  <Link href={uc.href} className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-accent transition-colors">
                    {uc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Services" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-4">Relevant Drone Services</h2>
            <p className="font-ui text-xs text-accent tracking-[0.3em] uppercase">Tailored to {title} Constraints</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className="bg-mid p-10 group hover:bg-accent/[0.03] transition-all flex flex-col h-full border border-transparent hover:border-accent/20">
                <h3 className="font-display text-xl text-white mb-4 uppercase tracking-widest group-hover:text-accent transition-colors">{svc.name}</h3>
                <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed mb-10 flex-1">
                  {svc.desc}
                </p>
                <div className="flex items-center gap-2 text-accent/40 font-ui text-[8px] tracking-[0.4em] uppercase group-hover:text-accent transition-colors">
                  View Service <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Bundles */}
      <section className="py-32 px-10 md:px-20 bg-dark border-b border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="svc-tag mb-8"><SectionTag number="03" text="Bundles" /></div>
              <h2 className="font-display text-5xl text-white uppercase leading-none tracking-tighter">BEST-FIT <br/><span className="text-accent">COMMERCIAL PACKAGES</span></h2>
            </div>
            <p className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/30 max-w-xs text-right">
              Outcome-led packages designed for {title} requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bundles.map((bundle, i) => (
              <div key={i} className="bg-mid p-10 border border-white/5 flex flex-col h-full hover:border-accent/20 transition-all group">
                <Package className="w-8 h-8 text-accent mb-8" />
                <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-widest">{bundle.name}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                  {bundle.fit}
                </p>
                <ul className="space-y-3 mb-12 flex-1 pt-6 border-t border-white/5">
                  {bundle.outputs.map((out, j) => (
                    <li key={j} className="flex items-center gap-3 font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">
                      <div className="w-1 h-1 bg-accent/40 rounded-full" />
                      {out}
                    </li>
                  ))}
                </ul>
                <Link href={bundle.href} className="bg-white/5 text-white font-ui text-[10px] tracking-[0.4em] uppercase py-4 text-center border border-white/10 hover:bg-accent hover:text-dark transition-all">
                  View Bundle Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Deliverables */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="04" text="Outputs" /></div>
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-16">Sample Deliverables for {title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/5 mb-16">
            {deliverables.map((item, i) => (
              <Link key={i} href="/sample-deliverables" className="bg-dark p-8 group hover:bg-accent/5 transition-all text-center aspect-square flex flex-col items-center justify-center">
                <FileText className="w-6 h-6 text-accent/30 group-hover:text-accent mb-4 transition-colors" />
                <span className="font-ui text-[10px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">{item.name}</span>
              </Link>
            ))}
          </div>
          <Link href="/sample-deliverables" className="inline-flex items-center gap-4 font-ui text-[11px] tracking-[0.4em] uppercase text-accent hover:text-white transition-colors">
            View All Sample Deliverables <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Operations Standard */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1000px] mx-auto text-center border border-white/5 p-20 bg-mid relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <LayoutDashboard className="w-16 h-16 text-accent/20 mx-auto mb-10" />
          <h2 className="font-display text-4xl text-white uppercase tracking-tighter mb-8 relative z-10">
            Managed Through the Altitude Operations Standard
          </h2>
          <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-12 relative z-10">
            Commercial drone work for {title} needs structure. Altitude Hire uses a defined operating model supported by Altitude Flight Desk to manage project briefs, planning, capture and deliverables.
          </p>
          <Link href="/operations-standard" className="inline-flex items-center gap-4 bg-accent text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] hover:bg-white transition-all relative z-10 uppercase">
            View Operations Standard <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="05" text="Workflow" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">How {title} Projects Are Scoped</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {processSteps.map((step, i) => (
              <div key={i} className="p-10 bg-mid relative group hover:bg-accent/5 transition-all">
                <span className="font-display text-5xl text-accent/10 mb-8 block group-hover:text-accent transition-colors">0{i+1}</span>
                <h3 className="font-display text-lg text-white mb-6 tracking-widest uppercase leading-tight">{step.title}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      {resources && resources.length > 0 && (
        <section className="py-24 px-10 md:px-20 bg-dark border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl text-white uppercase tracking-widest mb-12 text-center">Useful Guides for {title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((res, i) => (
                <Link key={i} href={res.href} className="p-6 border border-white/10 bg-white/[0.02] flex items-center justify-between group hover:border-accent/40 transition-all">
                  <span className="font-ui text-[10px] tracking-widest uppercase text-white/50 group-hover:text-white transition-colors">{res.title}</span>
                  <ArrowRight className="w-4 h-4 text-accent/40 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="svc-tag mb-8"><SectionTag number="06" text="Support" /></div>
          <h2 className="font-display text-5xl text-white mb-16 uppercase tracking-tighter leading-tight">{title} <span className="text-accent underline underline-offset-8 decoration-accent/20">FAQs</span></h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-10 md:px-20 text-center bg-dark">
        <div className="max-w-4xl mx-auto">
          <Activity className="w-12 h-12 mb-8 mx-auto animate-pulse text-accent" />
          <h2 className="font-display text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
            Need Drone Support for {title}?
          </h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-16 font-light">
            Tell us what you need to inspect, measure, monitor, evidence, film or visualise. Altitude Hire will recommend the right service, bundle and deliverables for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href={`/brief?source=${ctaBriefSource}-footer&sector=${slug}`} className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all flex items-center justify-center gap-4 group">
              {ctaText} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/project-brief-assistant" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all">
              Use Project Brief Assistant
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

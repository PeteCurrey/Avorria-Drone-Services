import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  Target, 
  FileText,
  ShieldAlert,
  Info
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { leadMagnets } from '@/lib/lead-magnets-config'
import LeadCaptureForm from '@/components/interactive/LeadCaptureForm'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const asset = leadMagnets.find(a => a.slug === params.slug)
  if (!asset) return { title: 'Asset Not Found' }

  return {
    title: `${asset.title} | Commercial Drone Resources | Altitude Hire`,
    description: asset.description,
  }
}

export async function generateStaticParams() {
  return leadMagnets.map((asset) => ({
    slug: asset.slug,
  }))
}

export default function LeadMagnetPage({ params }: Props) {
  const asset = leadMagnets.find(a => a.slug === params.slug)

  if (!asset) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation Header */}
      <nav className="pt-32 pb-8 px-8 md:px-20 border-b border-white/5 bg-[#0a0a0a]">
        <div className="container max-w-[1200px] mx-auto flex items-center justify-between">
          <Link href="/resources/downloads" className="flex items-center gap-3 font-ui text-[10px] tracking-[0.4em] uppercase text-white/30 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Resources
          </Link>
          <div className="flex items-center gap-3 font-ui text-[9px] tracking-[0.4em] uppercase text-white/10">
             <span>Resources</span>
             <ChevronRight className="w-2 h-2" />
             <span>Downloads</span>
             <ChevronRight className="w-2 h-2" />
             <span className="text-accent/60">{asset.type}</span>
          </div>
        </div>
      </nav>

      {/* Asset Content Section */}
      <section className="py-24 px-8 md:px-20 overflow-hidden">
        <div className="container max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left: Asset Details */}
            <div className="lg:col-span-5 space-y-12">
               <div className="space-y-8">
                  <div className="svc-tag"><SectionTag number="RESOURCE" text={asset.type} /></div>
                  <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter leading-none">
                    {asset.title}
                  </h1>
                  <p className="font-body text-xl text-white/50 leading-relaxed uppercase tracking-widest font-light italic border-l-2 border-accent/20 pl-8">
                    {asset.description}
                  </p>
               </div>

               {/* Contents Preview */}
               <div className="p-10 bg-white/[0.02] border border-white/5">
                  <h3 className="font-display text-xl text-white mb-8 uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-4">
                     <FileText className="w-5 h-5 text-accent" /> Contents Preview
                  </h3>
                  <ul className="space-y-4">
                    {asset.contentsPreview.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 font-ui text-[10px] tracking-widest uppercase text-white/40">
                         <div className="w-1.5 h-1.5 bg-accent/40 rounded-full mt-1.5 shrink-0" />
                         {item}
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Audience */}
               <div className="space-y-4">
                  <span className="block font-ui text-[9px] tracking-widest uppercase text-white/20">Target Audience</span>
                  <div className="flex flex-wrap gap-2">
                     {asset.audience.map(a => (
                       <span key={a} className="px-3 py-1 bg-white/5 border border-white/10 font-ui text-[9px] tracking-widest uppercase text-white/40">{a}</span>
                     ))}
                  </div>
               </div>

               {/* Caveat if exists */}
               {asset.caveat && (
                 <div className="p-6 bg-accent/[0.03] border border-accent/10 flex items-start gap-4">
                    <ShieldAlert className="w-5 h-5 text-accent/40 shrink-0" />
                    <p className="font-body text-[10px] text-accent/60 uppercase tracking-widest leading-relaxed italic">
                       {asset.caveat}
                    </p>
                 </div>
               )}

               {/* Related Services Links */}
               <div className="pt-8 border-t border-white/5">
                  <span className="block font-ui text-[9px] tracking-widest uppercase text-white/20 mb-6">Related Technical Services</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {asset.relatedServices.slice(0, 4).map(s => (
                       <Link key={s.href} href={s.href} className="group p-4 bg-white/[0.01] border border-white/5 hover:border-accent/30 transition-all flex items-center justify-between">
                          <span className="font-ui text-[9px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">{s.name}</span>
                          <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                       </Link>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right: Gated Form */}
            <div className="lg:col-span-7">
               <div className="sticky top-32">
                  <LeadCaptureForm asset={asset} />
                  
                  <div className="mt-12 flex items-center gap-6 justify-center">
                     <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent/40" />
                        <span className="font-ui text-[9px] tracking-widest uppercase text-white/20">Commercial Grade Resource</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Info className="w-4 h-4 text-accent/40" />
                        <span className="font-ui text-[9px] tracking-widest uppercase text-white/20">Planning Support Tool</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-24 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
         <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left opacity-30">
               <div className="space-y-2">
                  <span className="block font-display text-4xl text-white">CAA</span>
                  <span className="block font-ui text-[9px] tracking-widest uppercase text-white">Compliant Operations</span>
               </div>
               <div className="space-y-2">
                  <span className="block font-display text-4xl text-white">£10M</span>
                  <span className="block font-ui text-[9px] tracking-widest uppercase text-white">Public Liability</span>
               </div>
               <div className="space-y-2">
                  <span className="block font-display text-4xl text-white">GVC</span>
                  <span className="block font-ui text-[9px] tracking-widest uppercase text-white">Qualified Pilots</span>
               </div>
               <div className="space-y-2">
                  <span className="block font-display text-4xl text-white">24/7</span>
                  <span className="block font-ui text-[9px] tracking-widest uppercase text-white">Incident Response</span>
               </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 md:px-20 text-center bg-dark">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            Ready to Scope Your Mission?
          </h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-16 font-light">
            If you already have your project details ready, you can bypass the guides and start a formal project brief.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/brief" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all">
              START PROJECT BRIEF
            </Link>
            <Link href="/resources/downloads" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all">
              BROWSE ALL DOWNLOADS
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { ArrowRight, Download, FileText, ChevronRight, LayoutDashboard, Target, ShieldCheck } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { leadMagnets } from '@/lib/lead-magnets-config'

export default function LeadMagnetTeaser() {
  const featuredMagnets = leadMagnets.slice(0, 3)

  return (
    <section className="py-32 px-8 md:px-20 bg-dark relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
        <Download className="w-[400px] h-[400px]" />
      </div>
      
      <div className="container max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="svc-tag mb-8"><SectionTag number="01" text="Resources" /></div>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              COMMERCIAL GUIDES, <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">CHECKLISTS & TEMPLATES</span>
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed uppercase tracking-widest font-light">
              Download practical resources to help plan, scope and verify commercial drone inspections and surveys.
            </p>
          </div>
          <Link 
            href="/resources/downloads" 
            className="group flex items-center gap-6 bg-accent text-dark px-10 py-6 font-display text-2xl tracking-[0.1em] transition-all hover:bg-white"
          >
            VIEW ALL DOWNLOADS <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5">
           {featuredMagnets.map((asset, i) => (
             <div key={i} className="bg-mid/50 p-12 flex flex-col h-full group hover:bg-accent/[0.02] transition-all">
                <div className="p-4 bg-white/5 border border-white/10 text-accent group-hover:border-accent/40 transition-colors w-fit mb-8">
                  <FileText className="w-8 h-8" />
                </div>
                
                <h4 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors">{asset.title}</h4>
                
                <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed mb-10 flex-1">
                  {asset.description}
                </p>

                <Link 
                  href={`/resources/downloads/${asset.slug}`}
                  className="flex items-center justify-between font-ui text-[10px] tracking-[0.3em] uppercase text-accent border border-accent/20 px-6 py-4 hover:bg-accent hover:text-dark transition-all"
                >
                   {asset.status === 'preparing' ? 'REQUEST ACCESS' : 'DOWNLOAD NOW'}
                   <ChevronRight className="w-4 h-4" />
                </Link>
             </div>
           ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 items-center justify-center text-[9px] tracking-[0.3em] uppercase text-white/20 font-ui">
           <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Buyer Guides</span>
           <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Technical Checklists</span>
           <span className="flex items-center gap-2"><LayoutDashboard className="w-4 h-4" /> Project Templates</span>
        </div>
      </div>
    </section>
  )
}

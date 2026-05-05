import Link from 'next/link'
import { ArrowRight, Calculator, Target, Activity } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export default function CostEstimatorTeaser() {
  return (
    <section className="py-32 px-8 md:px-20 bg-dark relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
        <Calculator className="w-[400px] h-[400px]" />
      </div>
      
      <div className="container max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="svc-tag mb-8"><SectionTag number="COST" text="Indicative Scoping" /></div>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-8 uppercase tracking-tighter leading-[0.9]">
            WANT A SENSE OF COST <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">BEFORE YOU BRIEF US?</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed uppercase tracking-widest font-light mb-12">
            Use the interactive cost estimator to get an indicative complexity band and cost range for your commercial drone project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/cost-estimator" 
              className="group flex items-center gap-6 bg-accent text-dark px-10 py-6 font-display text-2xl tracking-[0.1em] transition-all hover:bg-white"
            >
              USE COST ESTIMATOR <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/pricing-guidance" 
              className="flex items-center gap-4 font-ui text-[11px] tracking-[0.4em] uppercase text-white/30 hover:text-white transition-colors"
            >
              View Pricing Guidance
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10">
           {[
             { title: 'Project Scoping', desc: 'Identify the project type, site complexity and scale.', icon: Target },
             { title: 'Data Requirements', desc: 'Select required deliverables and reporting levels.', icon: Activity },
             { title: 'Indicative Band', desc: 'Receive an estimated complexity or cost range.', icon: Calculator },
             { title: 'Brief Integration', desc: 'Push your estimate directly into a project brief.', icon: ArrowRight }
           ].map((item, i) => (
             <div key={i} className="bg-mid/50 p-8 flex flex-col gap-6 group hover:bg-accent/[0.02] transition-colors">
                <item.icon className="w-6 h-6 text-accent/40 group-hover:text-accent transition-colors" />
                <div>
                   <h4 className="font-display text-xl text-white mb-2 uppercase tracking-widest">{item.title}</h4>
                   <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}

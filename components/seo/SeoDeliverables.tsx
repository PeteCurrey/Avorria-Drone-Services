import Link from 'next/link'
import { CheckCircle2, Box, ArrowRight } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

interface SeoDeliverablesProps {
  captureList: string[];
  deliverablesList: string[];
  recommendedBundle?: {
    name: string;
    slug: string;
    description: string;
  };
}

export default function SeoDeliverables({ captureList, deliverablesList, recommendedBundle }: SeoDeliverablesProps) {
  return (
    <section className="py-32 px-10 md:px-20 bg-dark">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Outputs" /></div>
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter">
            WHAT WE CAPTURE & <span className="text-accent">WHAT YOU RECEIVE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {/* Capture Scope */}
          <div className="bg-mid p-12">
            <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-8">Target Scope</h3>
            <ul className="space-y-6">
               {captureList.map((item, i) => (
                 <li key={i} className="flex items-start gap-4 text-white/50 font-body text-sm uppercase tracking-widest">
                   <div className="w-1.5 h-1.5 bg-accent/30 mt-2 shrink-0" />
                   {item}
                 </li>
               ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="bg-mid p-12">
            <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-8">Deliverables</h3>
            <ul className="space-y-6">
               {deliverablesList.map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-white/70 font-ui text-[11px] tracking-[0.2em] uppercase">
                   <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                   {item}
                 </li>
               ))}
            </ul>
          </div>

          {/* Recommended Bundle */}
          {recommendedBundle && (
            <div className="bg-accent/5 p-12 border border-accent/20 flex flex-col justify-between group hover:bg-accent/10 transition-colors">
               <div>
                 <Box className="w-8 h-8 text-accent mb-6" />
                 <span className="font-ui text-[9px] tracking-[0.4em] uppercase text-accent/60 block mb-4">Recommended Option</span>
                 <h3 className="font-display text-3xl text-white uppercase tracking-tighter mb-4 leading-none">{recommendedBundle.name}</h3>
                 <p className="font-body text-xs text-white/50 uppercase tracking-widest leading-relaxed mb-8">
                   {recommendedBundle.description}
                 </p>
               </div>
               <Link href={`/bundles`} className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent flex items-center gap-2 group-hover:gap-4 transition-all">
                 View Commercial Packages <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

import SectionTag from '@/components/ui/SectionTag'

interface SeoContextSectionProps {
  heading: string;
  body: string;
  considerationsHeading?: string;
  considerations?: string[];
}

export default function SeoContextSection({ heading, body, considerationsHeading, considerations }: SeoContextSectionProps) {
  return (
    <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="svc-tag mb-8"><SectionTag number="01" text="Context" /></div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-none">
            {heading}
          </h2>
          <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light">
            {body}
          </p>
        </div>
        
        {considerations && considerations.length > 0 && (
          <div className="p-10 border border-white/10 bg-dark">
             <h3 className="font-ui text-[12px] tracking-[0.3em] uppercase text-accent mb-8">
               {considerationsHeading || 'Operational Considerations'}
             </h3>
             <ul className="space-y-4">
                {considerations.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-accent/50 rounded-full mt-2 shrink-0" />
                    <span className="font-body text-[11px] text-white/60 uppercase tracking-widest leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
             </ul>
          </div>
        )}
      </div>
    </section>
  )
}

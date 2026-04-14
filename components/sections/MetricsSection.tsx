import { ShieldCheck, Target, Zap } from 'lucide-react'

const METRICS = [
  {
    value: "100%",
    label: "SAFETY RECORD",
    desc: "CAA GVC Zero-Incident Approval Rating.",
    icon: ShieldCheck
  },
  {
    value: "±2CM",
    label: "RTK PRECISION",
    desc: "Centimeter-level absolute accuracy.",
    icon: Target
  },
  {
    value: "48HR",
    label: "DATA DELIVERY",
    desc: "Rapid turnaround on core deliverables.",
    icon: Zap
  }
]

export default function MetricsSection() {
  return (
    <section data-index="8" className="bg-dark py-32 px-10 md:px-20 border-y border-white/5 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto">
        {METRICS.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center text-center group">
            <div className="mb-8 p-4 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors duration-500">
              <metric.icon className="w-8 h-8 text-accent" />
            </div>
            <div className="font-display text-7xl text-white mb-4 tracking-tighter">
              {metric.value}
            </div>
            <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-4">
              {metric.label}
            </div>
            <p className="font-body text-xs text-white/30 uppercase tracking-[0.1em] max-w-[200px] leading-relaxed">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

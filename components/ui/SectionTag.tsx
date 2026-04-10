// components/ui/SectionTag.tsx
export default function SectionTag({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-4 mb-4 gsap-fade-up">
      <div className="w-10 h-[1px] bg-accent" />
      <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">
        {number} · {text}
      </span>
    </div>
  )
}

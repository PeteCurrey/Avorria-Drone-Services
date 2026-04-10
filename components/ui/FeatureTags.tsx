// components/ui/FeatureTags.tsx
export default function FeatureTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 my-8 gsap-fade-up">
      {tags.map((tag) => (
        <span 
          key={tag}
          className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/45 border border-white/12 px-4 py-2"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

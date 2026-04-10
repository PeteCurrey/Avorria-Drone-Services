// components/layout/ProgressDots.tsx
'use client'

import { useEffect, useState } from 'react'

interface ProgressDotsProps {
  totalSections: number
}

export default function ProgressDots({ totalSections }: ProgressDotsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(parseInt(entry.target.getAttribute('data-index') || '0'))
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll('section[data-index]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (index: number) => {
    const target = document.querySelector(`[data-index="${index}"]`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-8 md:right-12 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3">
      {Array.from({ length: totalSections }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className={`group relative flex items-center justify-end h-8 px-2 transition-all duration-400`}
          aria-label={`Scroll to section ${i + 1}`}
        >
          <div 
            className={`transition-all duration-400 ease-out
              ${activeIndex === i 
                ? 'w-[3px] h-5 bg-accent rounded-[2px]' 
                : 'w-[3px] h-[3px] bg-white/20 rounded-full group-hover:bg-white/40'
              }`}
          />
        </button>
      ))}
    </div>
  )
}

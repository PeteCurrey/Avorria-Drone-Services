'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-init'

interface GhostNumberProps {
  number: string
  position?: 'left' | 'right'
}

export default function GhostNumber({ number, position = 'right' }: GhostNumberProps) {
  const numberRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!numberRef.current) return
    
    gsap.fromTo(
      numberRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: numberRef.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <div ref={numberRef} className={`absolute top-1/2 -translate-y-1/2 font-display text-[clamp(120px,18vw,240px)] leading-none text-white/[0.025] pointer-events-none select-none z-0 ${position === 'left' ? 'left-0' : 'right-0'}`}>
      {number}
    </div>
  )
}

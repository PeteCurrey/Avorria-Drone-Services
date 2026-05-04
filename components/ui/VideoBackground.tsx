'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface VideoBackgroundProps {
  src: string          // path to mp4 in /public/videos/
  poster?: string      // poster image while loading
  alt?: string         // alt for the poster image
  brightness?: number  // default 0.40
  saturation?: number  // default 1.00
  className?: string
  isHero?: boolean     // hero gets high priority/autoplay, others get lazy loading
}

export default function VideoBackground({
  src,
  poster,
  alt = "Cinematic drone operations background",
  brightness = 0.40,
  saturation = 1.0,
  className = '',
  isHero = false
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sourceRef = useRef<HTMLSourceElement>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Hero videos load immediately
    if (isHero) {
      setHasStarted(true)
      return
    }

    // Lazy load observer for non-hero videos
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '200px' } // Start loading slightly before visibility
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [isHero])

  useEffect(() => {
    if (hasStarted && videoRef.current && sourceRef.current) {
      const video = videoRef.current
      const source = sourceRef.current
      
      // Transfer data-src to src
      if (source.dataset.src) {
        source.src = source.dataset.src
        video.load()
        video.play().catch(() => {
          // Silent catch for autoplay blocks
        })
      }
    }
  }, [hasStarted])

  return (
    <div className={`absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden ${className}`}>
      {poster && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <Image 
            src={poster} 
            alt={alt} 
            fill 
            priority={isHero}
            className="object-cover"
            style={{ filter: `brightness(${brightness}) saturate(${saturation})` }}
          />
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{ 
          filter: `brightness(${brightness}) saturate(${saturation})`,
          opacity: videoLoaded ? 1 : 0 
        }}
        onPlay={() => setVideoLoaded(true)}
        muted
        loop
        playsInline
        autoPlay={isHero}
        preload={isHero ? "auto" : "none"}
      >
        <source 
          ref={sourceRef}
          data-src={src} 
          type="video/mp4" 
        />
      </video>
      {/* Protection Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30 pointer-events-none" />
    </div>
  )
}

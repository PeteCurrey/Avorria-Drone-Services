// components/ui/VideoBackground.tsx
'use client'

interface VideoBackgroundProps {
  src: string          // path to mp4 in /public/videos/
  fallbackSrc?: string // path to webm fallback
  poster?: string      // poster image while loading
  brightness?: number  // default 0.40
  saturation?: number  // default 1.00
  className?: string
}

export default function VideoBackground({
  src,
  fallbackSrc,
  poster,
  brightness = 0.40,
  saturation = 1.0,
  className = ''
}: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden ${className}`}>
      <video
        className="w-full h-full object-cover"
        style={{ filter: `brightness(${brightness}) saturate(${saturation})` }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
      >
        {fallbackSrc && <source src={fallbackSrc} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
      {/* Protection Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30 pointer-events-none" />
    </div>
  )
}

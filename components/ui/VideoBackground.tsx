// components/ui/VideoBackground.tsx
'use client'

interface VideoBackgroundProps {
  src: string          // path to mp4 in /public/videos/
  fallbackSrc?: string // path to webm fallback
  poster?: string      // poster image while loading
  brightness?: number  // default 0.40
  className?: string
}

export default function VideoBackground({
  src,
  fallbackSrc,
  poster,
  brightness = 0.40,
  className = ''
}: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden ${className}`}>
      <video
        className="w-full h-full object-cover"
        style={{ filter: `brightness(${brightness})` }}
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
    </div>
  )
}

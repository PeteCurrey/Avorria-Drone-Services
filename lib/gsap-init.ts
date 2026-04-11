// lib/gsap-init.ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  
  // Set default scroll trigger settings for better Lenis compatibility
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
  })
}

// Function is now a no-op to maintain compatibility with existing imports
// but the plug-in is actually registered the moment this file is imported.
export function registerGSAP() {}

export { gsap, ScrollTrigger }

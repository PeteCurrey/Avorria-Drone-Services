import React from 'react'

export function TrustedByStrip() {
  const partners = [
    'PROPERTY & ASSETS', 'CONSTRUCTION', 'INFRASTRUCTURE', 'UTILITIES',
    'RENEWABLE ENERGY', 'FACILITIES MANAGEMENT', 'INSURANCE & CLAIMS', 'AERIAL MEDIA', 'CIVIL ENGINEERING',
    // Duplicate for seamless loop
    'PROPERTY & ASSETS', 'CONSTRUCTION', 'INFRASTRUCTURE', 'UTILITIES',
    'RENEWABLE ENERGY', 'FACILITIES MANAGEMENT', 'INSURANCE & CLAIMS', 'AERIAL MEDIA', 'CIVIL ENGINEERING'
  ]

  return (
    <div className="w-full bg-dark border-y border-white/10 py-6 overflow-hidden flex items-center relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      
      <div className="flex-shrink-0 px-8 border-r border-white/10 flex items-center h-full relative z-20 bg-dark">
        <span className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/50">Strategic Sectors</span>
      </div>

      <div className="flex overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-slow hover:pause">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center px-12">
              <span className="font-display tracking-[0.05em] text-2xl text-white/20">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
    </div>
  )
}

export function AccreditationsStrip() {
  const accreditations = [
    'CAA-COMPLIANT', 'GVC-QUALIFIED', 'OPERATIONAL AUTHORISATION', 'FULLY INSURED',
    'SITE-SPECIFIC RISK ASSESSMENT', 'FLIGHT PLANNING', 'TECHNICAL DATA DELIVERY',
    // Duplicate for seamless loop
    'CAA-COMPLIANT', 'GVC-QUALIFIED', 'OPERATIONAL AUTHORISATION', 'FULLY INSURED',
    'SITE-SPECIFIC RISK ASSESSMENT', 'FLIGHT PLANNING', 'TECHNICAL DATA DELIVERY'
  ]

  return (
    <div className="w-full bg-accent/5 border-y border-accent/20 py-5 overflow-hidden flex items-center relative z-20">
      <div className="flex overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-fast hover:pause">
          {accreditations.map((item, idx) => (
            <div key={idx} className="flex items-center px-12 gap-12">
              <span className="font-ui text-[13px] tracking-[0.25em] uppercase text-accent font-bold">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent text-accent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

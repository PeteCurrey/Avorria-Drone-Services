'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    question: "WHAT ARE THE WEATHER CONSTRAINTS FOR FLIGHT?",
    answer: "Our enterprise assets like the Matrice 350 RTK are IP55 rated, allowing for operation in light rain and winds up to 12m/s. However, for high-precision surveying or thermal auditing, we recommend dry conditions for maximum data integrity."
  },
  {
    question: "DO YOU HAVE PERMISSION FOR NIGHT OPERATIONS?",
    answer: "Yes. All our pilots are CAA GVC certified, which includes permissions for night operations across the UK. We utilize high-intensity lighting and thermal sensors for low-light infrastructure inspections."
  },
  {
    question: "HOW QUICKLY IS THE DATA DELIVERED?",
    answer: "Standard visual data is delivered within 24-48 hours. Complex LiDAR point clouds or 3D digital twins typically require 3-5 business days for full processing and quality assurance."
  },
  {
    question: "ARE YOU INSURED FOR HIGH-RISK ENVIRONMENTS?",
    answer: "Absolutely. We carry £10M Public Liability Insurance specifically tailored for industrial UAV operations, including flight in congested areas and critical infrastructure proximity."
  },
  {
    question: "DO YOU HANDLE ALL NEIGHBOURING PERMISSIONS?",
    answer: "As part of our mission planning, we manage all necessary NOTAMs, landowner permissions, and stakeholder notifications to ensure a fully compliant and friction-free deployment."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section data-index="10" className="bg-dark py-32 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Strategic FAQ</span>
        </div>
        <h2 className="font-display text-5xl text-white mb-20 tracking-wider">OPERATIONAL<br/><span className="text-accent underline underline-offset-8">INTELLIGENCE</span></h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/5 bg-white/[0.02] overflow-hidden group hover:border-accent/30 transition-all duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group-hover:bg-white/[0.01]"
              >
                <span className="font-display text-lg tracking-widest text-white/80 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-accent" />
                ) : (
                  <Plus className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
                )}
              </button>
              
              <div 
                className={`px-8 transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-body text-white/40 leading-relaxed text-sm max-w-2xl border-l border-accent/20 pl-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

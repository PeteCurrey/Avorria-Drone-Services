import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Events, Venues & Media | Altitude Hire',
  description: 'Aerial photography, drone video, FPV flythroughs, venue showcases, 360 panoramas and campaign-ready content for events, venues, tourism and commercial media teams.',
}

export default function EventsMediaSectorPage() {
  return (
    <SectorLayout
      slug="events-venues-media"
      title="Drone Services for Events, Venues and Media"
      subtitle="Aerial photography, drone video, FPV flythroughs, venue showcases, 360 panoramas and campaign-ready content for events, venues, tourism and commercial media teams."
      heroVideo="/videos/hero.mp4"
      heroPoster="/images/posters/events.jpg"
      badges={["Aerial Media", "FPV Flythroughs", "Venue Showcases", "Campaign Content", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Media Teams Use Drone Capture",
        text: "Static photography and traditional video often fail to capture the scale, energy and context of large venues, events and property estates. Marketing teams need premium, cinematic aerial content to stand out in competitive commercial landscapes.\nDrone services provide high-end visual assets — from cinematic 4K video and FPV flythroughs to interactive 360 panoramas — that help venues, events and brands tell their story with perspective that ground-based capture cannot match."
      }}
      useCases={[
        { title: "Venue and estate showcases", href: "/services/aerial-photography-film" },
        { title: "Cinematic 4K event filming", href: "/services/events-media" },
        { title: "Dynamic FPV drone flythroughs", href: "/services/fpv-drone-filming" },
        { title: "360 aerial site panoramas", href: "/services/360-aerial-panoramas" },
        { title: "Brand and tourism campaigns", href: "/services/aerial-photography-film" },
        { title: "Property and sales visuals", href: "/services/commercial-property-drone-surveys" },
        { title: "Interactive Gaussian Splat viewing", href: "/services/gaussian-splat-capture" },
        { title: "Social-first content clips", href: "/sample-deliverables" },
        { title: "Venue logistics and planning", href: "/services/surveying-mapping" },
        { title: "Location scouting imagery", href: "/sample-deliverables" }
      ]}
      services={[
        { name: "Events & Media", href: "/services/events-media", desc: "Aerial filming and photography for venues, events and brand campaigns." },
        { name: "Aerial Photography & Film", href: "/services/aerial-photography-film", desc: "Premium cinematic content for property and commercial marketing." },
        { name: "FPV Drone Filming", href: "/services/fpv-drone-filming", desc: "Dynamic indoor and outdoor flythrough content for venues and brands." },
        { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas", desc: "Interactive aerial viewing for developments, venues and tourism." },
        { name: "Gaussian Splat Capture", href: "/services/gaussian-splat-capture", desc: "Photorealistic 3D visualisation for immersive site viewing." },
        { name: "Commercial Property Drone Surveys", href: "/services/commercial-property-drone-surveys", desc: "Aerial visuals to enhance property marketing and records." }
      ]}
      bundles={[
        { 
          name: "Visual Sales Pack", 
          fit: "The premium media package for commercial agents, venues and marketing teams.", 
          outputs: ["Edited video", "High-res image set", "Social clips", "360 panorama"],
          href: "/bundles#visual-sales-pack"
        },
        { 
          name: "Immersive Digital Capture Pack", 
          fit: "Advanced 3D records for high-value asset visualisation and engagement.", 
          outputs: ["Gaussian Splat", "3D model", "Digital twin record", "Web viewer"],
          href: "/bundles#immersive-digital-capture-pack"
        }
      ]}
      deliverables={[
        { name: "High-Resolution Image Pack", href: "/sample-deliverables" },
        { name: "Edited Drone Video", href: "/sample-deliverables" },
        { name: "FPV Flythrough Video", href: "/sample-deliverables" },
        { name: "360 Aerial Panorama", href: "/sample-deliverables" },
        { name: "Social Media Video Clips", href: "/sample-deliverables" },
        { name: "Gaussian Splat Visualisation", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define creative outcome", desc: "We confirm if you need cinematic film, FPV flythroughs, or interactive 360 media." },
        { title: "Review site and shot list", desc: "We coordinate on shot requirements, venue access and safety constraints." },
        { title: "Select capture workflow", desc: "We use appropriate drones and sensors for cinematic or dynamic FPV capture." },
        { title: "Process and edit deliverables", desc: "Imagery is edited and video is processed into high-end final assets." },
        { title: "Deliver records and guidance", desc: "Final media is issued through the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "How can drones enhance venue marketing?", answer: "Drones provide unique cinematic perspectives that showcase the scale and context of venues, property and events." },
        { question: "What is an FPV drone flythrough?", answer: "FPV (First Person View) drones can fly dynamically through indoor and outdoor spaces, creating immersive, high-energy video content." },
        { question: "Can drones film at events?", answer: "Event drone operations are subject to site-specific risk assessment, separation distances and CAA requirements for public safety." },
        { question: "Can 360 panoramas be used on websites?", answer: "Yes. Interactive 360 aerial panoramas are an excellent way to provide site context on commercial and tourism websites." },
        { question: "What information is needed for a media brief?", answer: "We require site location, shot list or creative goals, and required final deliverable formats (e.g. social vs 4K masters)." },
        { question: "Are drone media services subject to weather?", answer: "Yes. High-end visual capture requires appropriate light and weather conditions, which we monitor as part of our planning." }
      ]}
      ctaText="Create Event or Venue Media Brief"
      ctaBriefSource="sector-media"
    />
  )
}

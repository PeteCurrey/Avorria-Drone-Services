// types/index.ts
import { LucideIcon } from 'lucide-react'

export interface Enquiry {
  id: string
  created_at: string
  name: string
  email: string
  message: string
  status?: string
}

export interface ProjectBrief {
  id: string
  created_at: string
  missionType: string
  location?: string
  scale?: string
  deadline?: string
  name: string
  email: string
  company?: string
  notes?: string
  status?: string
}

export interface Spec {
  label: string
  value: string
}

export interface TechnicalFeature {
  icon: LucideIcon
  title: string
  text: string
}

export interface ServiceItem {
  title: string
  hero: string
  desc: string
  video: string
  poster: string
  features: string[]
  specs: Spec[]
}

export interface FleetItem {
  name: string
  subtitle?: string
  desc: string
  image: string
  video: string
  specs: Spec[]
  technical: TechnicalFeature[]
}

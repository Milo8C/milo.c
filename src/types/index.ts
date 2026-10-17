export type Language = 'es' | 'en'

export interface ProjectItem {
  id: string
  title: string
  subtitle?: string
  description: string
  keyFeatures: string[]
  technologies: string[]
  category: 'edtech' | 'b2b' | 'institutional' | 'offline' | 'ai' | 'ecommerce'
  isFeatured?: boolean
  highlightBadge?: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  highlights: string[]
  iconName: string
  badge: string
}

export interface TechItem {
  name: string
  category: string
  featured?: boolean
  description?: string
  iconSlug?: string
}

export interface TechCategory {
  id: string
  title: string
  description: string
  items: TechItem[]
}

export interface ExperiencePillar {
  title: string
  description: string
  iconName: string
  metric?: string
  tags: string[]
}

export interface MethodologyStep {
  step: number
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  iconName: string
}

export interface QaCapability {
  title: string
  description: string
  iconName: string
  platforms: string[]
}

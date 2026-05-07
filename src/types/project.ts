export interface Project {
  title: string
  description: string
  longDescription: string
  period: string
  role: string
  features: string[]
  tech: string[]
  github: string
  demo: string | null
  featured: boolean
  image?: string
}

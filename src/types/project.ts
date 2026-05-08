export interface Project {
  title: string
  description: string
  longDescription: string
  period: string
  role: string
  features: { title: string; items: string[] }[]
  troubleshooting?: { title: string; items: string[] }[]
  tech: string[]
  github: string
  demo: string | null
image?: string
  imagePosition?: 'top' | 'center' | 'bottom'
  screenshots?: string[]
  learned?: string
  team?: string
}

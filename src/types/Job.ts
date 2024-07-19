export interface RawJobs {
  _id: string
  update_date: string
  created_date: string
  info: {
    education_level: string[]
    work_fields: string[]
    work_places: string[]
    keywords: string[]
    title: string
    type: string
    city: string
    postal_code: string
    geoloc: {
      lat: number
      lng: number
    }
  }
  candidate: {
    skills: {
      required: string[]
      important: string[]
      bonus: string[]
    }
    languages: string[]
    profile: string
    missions: string
  }
  company: {
    name: string
    description: string
  }
}

export interface Job {
  id: string
  companyName: string
  createdSince: string
  title: string
  type: string
  location: string
  description: string
}

import SearchForm from '@/components/SearchForm/SearchForm'
import styles from './page.module.scss'
import { Job, RawJobs } from '@/types/Job'
import SearchResult from '@/components/SearchResult/SearchResult'

const createdSince = (date: string) => {
  const relativeTimeFormatter = new Intl.RelativeTimeFormat('fr', { style: 'short' })

  const TIME_STAMPS: { name: Intl.RelativeTimeFormatUnit; amount: number }[] = [
    { name: 'seconds', amount: 60 },
    { name: 'minutes', amount: 60 },
    { name: 'hours', amount: 24 },
    { name: 'days', amount: 7 },
    { name: 'weeks', amount: 4.34524 },
    { name: 'months', amount: 12 },
    { name: 'years', amount: Number.POSITIVE_INFINITY }
  ]

  let duration = (Date.parse(date) - Date.now()) / 1000

  for (let i = 0; i < TIME_STAMPS.length; i++) {
    const timeStamp = TIME_STAMPS[i]

    if (Math.abs(duration) < timeStamp.amount) {
      return relativeTimeFormatter.format(Math.round(duration), timeStamp.name)
    }
    duration /= timeStamp.amount
  }

  return 'NA'
}

const jobsMapper = (rawJobs: RawJobs[]) => {
  const jobs = rawJobs.map((rawJob) => {
    const job: Job = {
      id: rawJob._id,
      companyName: rawJob.company.name,
      createdSince: createdSince(rawJob.created_date),
      title: rawJob.info.title,
      type: rawJob.info.type,
      location: rawJob.info.city,
      description: rawJob.company.description
    }
    return job
  })
  return jobs
}

async function getSearchJobData(title: string, location: string) {
  const res = await fetch('https://uat.bloom-alternance.fr/api/offers/public?page=1&limit=10')
  const rawJobs = await res.json()
  const jobs = jobsMapper(rawJobs.data)
  const totalJobs = rawJobs.total
  const pagesJobs = rawJobs.pages

  const filterJobs = jobs.filter((job) => {
    let filters = []
    if (title) filters.push({ name: 'title', value: title })
    if (location) filters.push({ name: 'location', value: location })

    if (filters.length === 0) {
      return job
    } else {
      let isFiltered = true
      filters.forEach((filter) => {
        if (!job[filter.name as keyof Job].toLowerCase().includes(filter.value.toLowerCase())) isFiltered = false
      })
      if (isFiltered) return job
    }
  })

  return [filterJobs, totalJobs , pagesJobs]
}

export default async function SearchPage({ searchParams }: { searchParams: { title: string; location: string } }) {
  const { title, location } = searchParams
  const [jobData, totalJobs, totalPages] = await getSearchJobData(title, location)
  return (
    <main className={styles.main}>
      <SearchForm />
      <SearchResult
        jobs={jobData}
        totalJobs={totalJobs}
        totalPages={totalPages}
      />
    </main>
  )
}

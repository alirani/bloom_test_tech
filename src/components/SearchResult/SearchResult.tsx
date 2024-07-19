import { Job } from '@/types/Job'
import styles from './SearchResult.module.scss'
import { Image, Pagination, Pill, Text, Title } from '@mantine/core'
import NextImage from 'next/image'
import { IconCalendarEvent, IconHeart, IconMapPin } from '@tabler/icons-react'

interface SearchResultProps {
  jobs: Job[]
  totalJobs: number
  currentPage?: number
  totalPages: number
}

interface JobCardProps {
  company: string
  title: string
  type: string
  location: string
  createdSince: string
  description: string
}
const JobCard = (props: JobCardProps) => {
  const { company, title, type, location, createdSince, description } = props
  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardLogo}>
          <Image
            className={styles.logo}
            src={'/logoCompany.png'}
            alt='Company Logo'
            component={NextImage}
            width={0}
            height={0}
            sizes='100vw'
            priority
          />
        </div>
        <div className={styles.cardTitles}>
          <Text
            fw={600}
            size='xl'
          >
            {company}
          </Text>
          <Text
            fw={700}
            size='xl'
          >
            {title}
          </Text>
        </div>
        <IconHeart color='#6FD4C6' />
      </div>
      <div className={styles.cardInfo}>
        <Pill
          size='xl'
          c='#37736A'
        >
          {type}
        </Pill>
        •
        <Text className={styles.txtLogo}><IconMapPin />{location}</Text>
        •
        <Text className={styles.txtLogo}><IconCalendarEvent/>{createdSince}</Text>
      </div>
      <div className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: description }}/>
    </li>
  )
}

const SearchResult = (props: SearchResultProps) => {
  const { jobs, totalJobs } = props
  return (
    <div className={styles.resultContainer}>
      <div className={styles.textContainer}>
        <Text
          fw={700}
          size='xl'
        >
          Offres Bloom
        </Text>
        <Text
          fw={400}
          c='gray'
          size='lg'
        >
          {totalJobs} postes
        </Text>
      </div>
      <ul className={styles.jobContainer}>
        {jobs
          ? jobs.map((job) => (
              <JobCard
                key={job.id}
                company={job.companyName}
                title={job.title}
                type={job.type}
                location={job.location}
                createdSince={job.createdSince}
                description={job.description}
              />
            ))
          : null}
      </ul>
      <Pagination className={styles.pagination} color='#12564B'  radius='xl' total={totalJobs}/>
    </div>
  )
}

export default SearchResult

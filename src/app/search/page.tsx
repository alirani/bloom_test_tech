import SearchForm from '@/components/SearchForm/SearchForm'
import styles from './page.module.css'

export default async function SearchPage() {
  return (
    <main className={styles.main}>
      <SearchForm />
    </main>
  )
}

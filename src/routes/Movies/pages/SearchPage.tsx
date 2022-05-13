import { useQuery } from 'react-query'
import styles from './Pages.module.scss'

interface IMovieItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface IMoviesResults {
  Search: [IMovieItem]
  totalResults: string
  Response: string
}

const SearchPage = () => {
  const { isLoading, data } = useQuery<IMoviesResults>('movies', () =>
    fetch(`https://www.omdbapi.com/?apikey=92e32667&s=baby%20man&page=3`).then((response) => response.json())
  )
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.search}>
        <input type='text' placeholder='영화를 검색하세요!' />
        <span className='material-symbols-outlined'>search</span>
      </header>
      <main className={styles.pageMain}>
        <span className={styles.pageResultNone}>검색 결과가 없습니다.</span>
      </main>
    </div>
  )
}
export default SearchPage

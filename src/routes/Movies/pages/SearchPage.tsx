import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import styles from './Pages.module.scss'
import { fetchMovieApi } from 'services/api'
import MovieCard from 'components/movieCard'
import { useRecoilValue } from 'recoil'
import { favoriteCardOpenState } from 'atoms'
import FavoriteCard from 'components/favoriteCard'
import { Link } from 'react-router-dom'

interface IMovieItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface IMoviesResults {
  Search: IMovieItem[]
  totalResults: string
  Response: string
}

const SearchPage = () => {
  const favoriteCardOpen = useRecoilValue(favoriteCardOpenState)
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)
  const [movieData, setMovieData] = useState<IMoviesResults>()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const { data } = useQuery<IMoviesResults>(['movies', value], () => fetchMovieApi(value, page))

  const handleClicked = () => {
    setMovieData(data)
  }
  return (
    <div className={styles.pageWrapper}>
      <form className={styles.search}>
        <input onChange={handleChange} type='text' placeholder='영화를 검색하세요!' />
        <button onClick={handleClicked} type='button' className={styles.searchBtn}>
          <span className='material-symbols-outlined'>search</span>
        </button>
      </form>
      <main className={styles.pageMain}>
        {movieData?.Response === 'True' ? (
          <ul className={styles.movieCard}>
            {movieData.Search.map((movie) => (
              <MovieCard key={movie.imdbID} {...movie} />
            ))}
            <span>Current Page: {page}</span>
          </ul>
        ) : (
          <span className={styles.pageResultNone}>검색 결과가 없습니다.</span>
        )}
      </main>
      {favoriteCardOpen ? <FavoriteCard /> : null}
    </div>
  )
}
export default SearchPage

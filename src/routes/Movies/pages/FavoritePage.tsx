import styles from './Pages.module.scss'
import store from 'store'
import MovieCard from 'components/movieCard'
import { useEffect, useState } from 'react'
import FavoriteCard from 'components/favoriteCard'
import { useRecoilValue } from 'recoil'
import { favoriteCardOpenState } from 'atoms'
import { useParams } from 'react-router-dom'

interface IMovieItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
const FavoritePage = () => {
  const params = useParams<{ path: string }>()
  const [favoriteList, setFavoriteList] = useState<IMovieItem[]>([])
  const favoriteCardOpen = useRecoilValue(favoriteCardOpenState)
  // console.log(params)
  const handleAllClearBtn = () => {
    store.set('favoriteMovies', [])
    setFavoriteList(store.get('favoriteMovies'))
  }

  useEffect(() => {
    setFavoriteList(store.get('favoriteMovies'))
  }, [])

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.favorite}>
        <h1>내 즐겨찾기</h1>
        <button type='button' onClick={handleAllClearBtn} className={styles.allClearBtn}>
          전체 삭제
        </button>
      </header>
      <main className={styles.pageMain}>
        {favoriteList.length !== 0 ? (
          <ul className={styles.movieCard}>
            {favoriteList.map((movie) => (
              <MovieCard key={movie.imdbID} {...movie} />
            ))}
          </ul>
        ) : (
          <span className={styles.pageResultNone}>즐겨찾기 목록이 없습니다.</span>
        )}
      </main>
      {favoriteCardOpen ? <FavoriteCard /> : null}
    </div>
  )
}
export default FavoritePage

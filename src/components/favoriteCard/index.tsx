import { clickMovieState, favoriteCardOpenState } from 'atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styles from './FavoriteCard.module.scss'
import store from 'store'
import { useParams } from 'react-router-dom'

const FavoriteCard = () => {
  const params = useParams<{ path: string }>()
  const clickMovie = useRecoilValue(clickMovieState)
  const setFavoriteCard = useSetRecoilState(favoriteCardOpenState)

  const handleDeleteBtn = () => {
    console.log('삭제 누름')
  }
  const handleFavoriteBtn = () => {
    if (!store.get('favoriteMovies')) {
      store.set('favoriteMovies', [clickMovie])
    } else {
      const favoriteMoviesList = store.get('favoriteMovies')
      store.set('favoriteMovies', [...favoriteMoviesList, clickMovie])
    }
    setFavoriteCard(false)
  }
  const handleCancleBtn = () => {
    setFavoriteCard(false)
  }

  return (
    <section className={styles.favoriteCardWrapper}>
      <div className={styles.favoriteCard}>
        <div className={styles.favoriteCardInfo}>
          <div className={styles.cardImg}>
            <img src={clickMovie.Poster} alt='Poster' />
          </div>
          <div>
            <h3>{clickMovie.Title}</h3>
            <span>🎬 {clickMovie.Type}</span>
            <span>📅 {clickMovie.Year}</span>
          </div>
        </div>
        <footer className={styles.favoriteCardFooter}>
          {params.path ? (
            <button type='button' onClick={handleDeleteBtn}>
              즐겨찾기 해제
            </button>
          ) : (
            <button type='button' onClick={handleFavoriteBtn}>
              즐겨찾기
            </button>
          )}
          <button type='button' onClick={handleCancleBtn}>
            취소
          </button>
        </footer>
      </div>
    </section>
  )
}
export default FavoriteCard

import { clickMovieState, favoriteCardOpenState } from 'atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styles from './FavoriteCard.module.scss'

const FavoriteCard = () => {
  const clickMovie = useRecoilValue(clickMovieState)
  const setFavoriteCard = useSetRecoilState(favoriteCardOpenState)

  const handleCancleBtn = () => {
    setFavoriteCard(false)
  }

  return (
    <section className={styles.favoriteCardWrapper}>
      <div className={styles.favoriteCard}>
        <div className={styles.favoriteCardInfo}>
          <div className={styles.cardImg}>
            <img src={clickMovie[0].Poster} alt='Poster' />
          </div>
          <div>
            <h3>{clickMovie[0].Title}</h3>
            <span>연도 : {clickMovie[0].Year}</span>
            <span>타입 : {clickMovie[0].Type}</span>
          </div>
        </div>
        <footer className={styles.favoriteCardFooter}>
          <button type='button'>즐겨찾기</button>
          <button type='button' onClick={handleCancleBtn}>
            취소
          </button>
        </footer>
      </div>
    </section>
  )
}
export default FavoriteCard

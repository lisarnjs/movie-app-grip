import { clickMovieState, favoriteCardOpenState } from 'atoms'
import { useSetRecoilState } from 'recoil'
import styles from './MovieCard.module.scss'

interface IMovieCardProps {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const MovieCard = ({ Title, Poster, Year, Type, imdbID }: IMovieCardProps) => {
  const setFavoriteCardOpen = useSetRecoilState(favoriteCardOpenState)
  const setClickMovie = useSetRecoilState(clickMovieState)
  const handleClick = () => {
    setClickMovie(() => [
      {
        Title,
        Poster,
        Year,
        Type,
        imdbID,
      },
    ])
    setFavoriteCardOpen(true)
  }
  return (
    <li key={imdbID} className={styles.cardList}>
      <div className={styles.cardImg}>
        <img src={Poster} alt='No Poster' />
      </div>
      <div className={styles.cardInfo}>
        <div>
          <span>{Title}</span>
        </div>
        <div>
          <span>🎬 {Type}</span>
          <span>📅 {Year}</span>
        </div>
      </div>
      <button type='button' onClick={handleClick} className={styles.cardClickBtn}>
        버튼
      </button>
    </li>
  )
}
export default MovieCard

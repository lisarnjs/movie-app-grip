import styles from './MovieCard.module.scss'

interface IMovieCardProps {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const MovieCard = ({ Title, Poster, Year, Type, imdbID }: IMovieCardProps) => {
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
          <span>연도 : {Year}</span>
          <span> 타입 : {Type}</span>
        </div>
      </div>
    </li>
  )
}
export default MovieCard

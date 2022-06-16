import Footer from 'components/footer'
import { useParams } from 'react-router-dom'
import styles from './Movies.module.scss'
import FavoritePage from './pages/FavoritePage'
import SearchPage from './pages/SearchPage'
import store from 'store'

const Movies = () => {
  const params = useParams<{ path: string }>()
  return (
    <div className={styles.movie}>
      {!params.path && <SearchPage />}
      {params.path && <FavoritePage />}
      <Footer locate={params.path} />
    </div>
  )
}
export default Movies

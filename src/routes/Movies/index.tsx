import cx from 'classnames'
import { Link, NavLink, useParams } from 'react-router-dom'
import styles from './Movies.module.scss'
import FavoritePage from './pages/FavoritePage'
import SearchPage from './pages/SearchPage'

const Movies = () => {
  const params = useParams<{ path: string }>()
  return (
    <div className={styles.movie}>
      {!params.path && <SearchPage />}
      {params.path && <FavoritePage />}
      <nav className={styles.lnb}>
        <ul>
          <li>
            <Link to=''>
              <span className={cx('material-symbols-outlined', !params.path && styles.isActive)}>search</span>
            </Link>
          </li>
          <li>
            <NavLink to='favorite'>
              <span className={cx('material-symbols-outlined', params.path && styles.isActive)}>favorite</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Movies

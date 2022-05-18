import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import styles from './Footer.module.scss'

interface IFooterProps {
  locate?: string
}

const Footer = ({ locate }: IFooterProps) => {
  return (
    <nav className={styles.lnb}>
      <ul>
        <li>
          <NavLink to=''>
            <span className={cx('material-symbols-outlined', !locate && styles.isActive)}>search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='favorite'>
            <span className={cx('material-symbols-outlined', locate && styles.isActive)}>favorite</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Footer

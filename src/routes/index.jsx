import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'
import Movies from './Movies'
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Movies />}>
          <Route path=':path' element={<Movies />} />
        </Route>
      </Routes>

      <ReactQueryDevtools initialIsOpen='true' />
    </div>
  )
}

export default App

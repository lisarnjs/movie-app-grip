import styles from './Pages.module.scss'

const FavoritePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.favorite}>
        <h1>내 즐겨찾기</h1>
      </header>
      <main className={styles.pageMain}>
        <span className={styles.pageResultNone}>즐겨찾기 목록이 없습니다.</span>
      </main>
    </div>
  )
}
export default FavoritePage

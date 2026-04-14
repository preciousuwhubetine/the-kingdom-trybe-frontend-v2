import styles from './styles.module.css'

function TrybePathCard({
  active = false,
  type = 'gamer',
  select = () => {},
}) {
  return (
    <div className={`${styles['TrybePathCard']} ${styles[type]} ${active ? styles['Active'] : ''}`} onClick={select}>
      <div className={styles['TrybePathCardTop']}>
        <img src={`/trybe-path-${type}.png`} alt="" />

        <div className={styles['TrybePathCardBg']} />
      </div>

      <div className={styles['TrybePathCardContent']}>
        <div className={styles['TrybePathCardContentMain']}>
          <h3>
            {type}
          </h3>

          <p>
            {
              type === 'gamer' && 'Best for: Viewers who want to attend live worship/joy streams, join Trybes, and earn XP for showing up and sharing.'
            }
            {
              type === 'streamer' && 'Best for: Creators who want to run worship/faith entertainment streams and rally community around them (YouTube-based, TKT-hosted)'
            }
            {
              type === 'seeker' && 'Best for: New/re-connecting users who prefer guided content, devotion reminders, and low-pressure rooms.'
            }
            {
              type === 'incognito' && 'Best for: Users who want anonymity and private care options (e.g., counselling, support groups) with strict encryption and region-compliant privacy.'
            }
          </p>

          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39 0V39L0 0H39Z" fill={active ? "#F9B640" : "#000"} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TrybePathCard

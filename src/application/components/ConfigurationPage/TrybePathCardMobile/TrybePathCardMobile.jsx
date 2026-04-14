import styles from './styles.module.css'

function TrybePathCardMobile({
  active = false,
  type = 'gamer',
  next,
  previous,
}) {
  return (
    <div className={`${styles['TrybePathCardMobile']} ${styles[type]} ${active ? styles['Active'] : ''}`}>
      <div className={styles['TrybePathCardMobileTop']}>
        <button className={styles['Left']} onClick={previous} disabled={!previous}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5306 18.9698C15.6003 19.0395 15.6556 19.1222 15.6933 19.2132C15.731 19.3043 15.7504 19.4019 15.7504 19.5004C15.7504 19.599 15.731 19.6965 15.6933 19.7876C15.6556 19.8786 15.6003 19.9614 15.5306 20.031C15.4609 20.1007 15.3782 20.156 15.2872 20.1937C15.1961 20.2314 15.0985 20.2508 15 20.2508C14.9014 20.2508 14.8039 20.2314 14.7128 20.1937C14.6218 20.156 14.539 20.1007 14.4694 20.031L6.96935 12.531C6.89962 12.4614 6.8443 12.3787 6.80656 12.2876C6.76882 12.1966 6.74939 12.099 6.74939 12.0004C6.74939 11.9019 6.76882 11.8043 6.80656 11.7132C6.8443 11.6222 6.89962 11.5394 6.96935 11.4698L14.4694 3.96979C14.6101 3.82906 14.801 3.75 15 3.75C15.199 3.75 15.3899 3.82906 15.5306 3.96979C15.6713 4.11052 15.7504 4.30139 15.7504 4.50042C15.7504 4.69944 15.6713 4.89031 15.5306 5.03104L8.56029 12.0004L15.5306 18.9698Z" fill="white"/>
          </svg>
        </button>

        <img src={`/trybe-path-${type}.png`} alt="" />

        <button className={styles['Right']} onClick={next} disabled={!next}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.46967 18.9698C8.39994 19.0395 8.34462 19.1222 8.30688 19.2132C8.26914 19.3043 8.24971 19.4019 8.24971 19.5004C8.24971 19.599 8.26914 19.6965 8.30688 19.7876C8.34462 19.8786 8.39994 19.9614 8.46967 20.031C8.53941 20.1007 8.62199 20.156 8.7131 20.1937C8.80421 20.2314 8.90177 20.2508 9 20.2508C9.09823 20.2508 9.19579 20.2314 9.2869 20.1937C9.37801 20.156 9.46059 20.1007 9.53033 20.031L17.0304 12.531C17.1001 12.4614 17.1554 12.3787 17.1931 12.2876C17.2308 12.1966 17.2502 12.099 17.2502 12.0004C17.2502 11.9019 17.2308 11.8043 17.1931 11.7132C17.1554 11.6222 17.1001 11.5394 17.0304 11.4698L9.53033 3.96979C9.3896 3.82906 9.19871 3.75 9 3.75C8.80129 3.75 8.61056 3.82906 8.46982 3.96979C8.32909 4.11052 8.25001 4.30139 8.25001 4.50042C8.25001 4.69944 8.32909 4.89031 8.46982 5.03104L15.4391 12.0004L8.46967 18.9698Z" fill="white"/>
          </svg>
        </button>
      </div>

      <div className={styles['TrybePathCardMobileContent']}>
        <div className={styles['TrybePathCardMobileContentMain']}>
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
        </div>
      </div>
    </div>
  )
}

export default TrybePathCardMobile

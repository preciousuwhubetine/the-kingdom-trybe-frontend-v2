import styles from './styles.module.css'

function Footer({
  hide = false
}) {
  if (hide) return null;

  return (
    <footer className={styles['Footer']}>
      <div className="container">
        <div className={styles['FooterContent']}>
          <div className={styles['FooterTop']}>
            <div className={styles['FooterTopLogo']}>
              <img src="/logo.png" alt="TheKingdomTrybe Logo" />

              <p>
                TKT supports churches in reaching the digital generation
              </p>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Platform</h3>
              <ul>
                <li><a href="/">Watch</a></li>
                <li><a href="/">Commuunity</a></li>
                <li><a href="/">Counselling</a></li>
                <li><a href="/">Team</a></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Resources</h3>
              <ul>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Past Sermons</a></li>
                <li><a href="/">Daily Devotion</a></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Participate</h3>
              <ul>
                <li><a href="/">Give</a></li>
                <li><a href="/">Merch</a></li>
                <li><a href="/">Share Testimony</a></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Socials</h3>
              <ul>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Tik Tok</a></li>
                <li><a href="/">YouTube</a></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Legal</h3>
              <ul>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Use</a></li>
              </ul>
            </div>
          </div>

          <p className={styles['FooterBottom']}>
            TheKingdomTrybe {new Date().getFullYear()}©.  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

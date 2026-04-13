import { Link } from 'react-router-dom';
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
                <li><Link to="/">Watch</Link></li>
                <li><Link to="/">Commuunity</Link></li>
                <li><Link to="/">Counselling</Link></li>
                <li><Link to="/">Team</Link></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Resources</h3>
              <ul>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Events</Link></li>
                <li><Link to="/past-sermons">Past Sermons</Link></li>
                <li><Link to="/">Daily Devotion</Link></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Participate</h3>
              <ul>
                <li><Link to="/">Give</Link></li>
                <li><Link to="/">Merch</Link></li>
                <li><Link to="/">Share Testimony</Link></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Socials</h3>
              <ul>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Facebook</Link></li>
                <li><Link to="/">Tik Tok</Link></li>
                <li><Link to="/">YouTube</Link></li>
              </ul>
            </div>

            <div className={styles['FooterTopLinks']}>
              <h3>Legal</h3>
              <ul>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Terms of Use</Link></li>
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

import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'

function HandleSelectionPage() {
  const navigate = useNavigate();
  
  const submitForm = (e) => {
    e.preventDefault();
    navigate('/trybe-path');
  }

  return (
    <div className={styles['HandleSelectionPage']}>
      <div className={styles['HandleSelectionPageBg']} />
      <img className={styles['HandleSelectionPageLogo']} src="/logo.png" />

      <div className={styles['HandleSelectionPageHeading']}>
        <h1>PICK A HANDLE</h1>
        <p>Pick a handle. The rest is easy.</p>
      </div>

      <form onSubmit={submitForm}>
        <label>
          <span>Handle / gamer tag</span>
          <input type="text" placeholder='e.g. Smooth' />
        </label>

        <button type='submit'>
          <svg width="423" height="48" viewBox="0 0 423 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M422.279 22.5156L392.143 48H0V24.5215L29 0H422.279V22.5156Z" fill="#D9D9D9" />
            <path d="M422.279 22.5156L392.143 48H0V24.5215L29 0H422.279V22.5156Z"
              fill="url(#paint0_linear_361_2851)" />
            <defs>
              <linearGradient id="paint0_linear_361_2851" x1="0" y1="24" x2="422.279" y2="24"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#42E6A4" />
                <stop offset="1" stop-color="#7A5CFF" />
              </linearGradient>
            </defs>
          </svg>

          <svg width="432" height="56" viewBox="0 0 432 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_361_2855" fill="white">
              <path d="M432 28.5928L400.333 56H0V28.1572L32.4258 0H432V28.5928Z" />
            </mask>
            <path
              d="M432 28.5928L432.654 29.3489L433 29.0498V28.5928H432ZM400.333 56V57H400.706L400.987 56.7561L400.333 56ZM0 56H-1V57H0V56ZM0 28.1572L-0.65566 27.4022L-1 27.7012V28.1572H0ZM32.4258 0V-1H32.0522L31.7701 -0.755056L32.4258 0ZM432 0H433V-1H432V0ZM432 28.5928L431.346 27.8366L399.679 55.2439L400.333 56L400.987 56.7561L432.654 29.3489L432 28.5928ZM400.333 56V55H0V56V57H400.333V56ZM0 56H1V28.1572H0H-1V56H0ZM0 28.1572L0.65566 28.9123L33.0814 0.755056L32.4258 0L31.7701 -0.755056L-0.65566 27.4022L0 28.1572ZM32.4258 0V1H432V0V-1H32.4258V0ZM432 0H431V28.5928H432H433V0H432Z"
              fill="url(#paint0_linear_361_2855)" mask="url(#path-1-inside-1_361_2855)" />
            <defs>
              <linearGradient id="paint0_linear_361_2855" x1="0" y1="28.4727" x2="236.52" y2="28.4727"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#42E6A4" />
                <stop offset="1" stop-color="#7A5CFF" />
              </linearGradient>
            </defs>
          </svg>

          <span>Continue</span>
        </button>
      </form>
    </div>
  )
}

export default HandleSelectionPage

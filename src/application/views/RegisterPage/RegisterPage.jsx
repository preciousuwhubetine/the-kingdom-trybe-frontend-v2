import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function RegisterPage() {
  return (
    <div className={styles['RegisterPage']}>
      <div className={styles['RegisterPageMain']}>
        <Link to="/">
          <img src="/logo.png" alt="Logo" className={styles['RegisterPageLogo']} />
        </Link>

        <hr />

        <form className={styles['RegisterPageForm']}>
          <div className={styles['RegisterPageFormHeader']}>
            <h2>JOIN THE TRYBE</h2>
            <p>Pick a handle. The rest is easy.</p>
          </div>
          <button type="button" className={styles['RegisterPageButton']}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_361_3005)">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.6 10.2271C19.6 9.518 19.5364 8.83619 19.4182 8.18164H10V12.0498H15.3818C15.15 13.2998 14.4455 14.3589 13.3864 15.068V17.5771H16.6182C18.5091 15.8362 19.6 13.2725 19.6 10.2271Z" fill="#4285F4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 20.0004C12.7 20.0004 14.9637 19.1049 16.6182 17.5777L13.3864 15.0686C12.4909 15.6686 11.3455 16.0231 10 16.0231C7.39548 16.0231 5.19093 14.264 4.40457 11.9004H1.06366V14.4913C2.70911 17.7595 6.09093 20.0004 10 20.0004Z" fill="#34A853"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.40455 11.8997C4.20455 11.2997 4.09091 10.6588 4.09091 9.9997C4.09091 9.34061 4.20455 8.6997 4.40455 8.0997V5.50879H1.06364C0.386364 6.85879 0 8.38606 0 9.9997C0 11.6133 0.386364 13.1406 1.06364 14.4906L4.40455 11.8997Z" fill="#FBBC05"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.47273L16.6909 2.60455C14.9591 0.990909 12.6955 0 10 0C6.09093 0 2.70911 2.24091 1.06366 5.50909L4.40457 8.1C5.19093 5.73636 7.39548 3.97727 10 3.97727Z" fill="#EA4335"/>
              </g>
              <defs>
              <clipPath id="clip0_361_3005">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
            </svg>

            Continue with Google
          </button>
          <div className={styles['RegisterPageOr']}>
            <div />
            <span>OR</span>
            <div />
          </div>
          <div className={styles['RegisterPageFormGroup']}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className={styles['RegisterPageFormGroup']}>
            <label htmlFor="password">Password</label>
            <div className={styles['RegisterPageFormGroup']}>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
              <button type="button" className={styles['RegisterPageReveal']}>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2177 4.2463C13.3835 4.45302 13.4753 4.72159 13.4753 5.00006C13.4753 5.27853 13.3835 5.5471 13.2177 5.75382C12.1677 7.02509 9.77764 9.5001 6.98764 9.5001C4.19764 9.5001 1.80764 7.02509 0.757639 5.75382C0.591799 5.5471 0.5 5.27853 0.5 5.00006C0.5 4.72159 0.591799 4.45302 0.757639 4.2463C1.80764 2.97503 4.19764 0.5 6.98764 0.5C9.77764 0.5 12.1677 2.97503 13.2177 4.2463Z" stroke="#7C7C7C" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.98767 7C8.09224 7 8.98767 6.10457 8.98767 5C8.98767 3.89543 8.09224 3 6.98767 3C5.8831 3 4.98767 3.89543 4.98767 5C4.98767 6.10457 5.8831 7 6.98767 7Z" stroke="#7C7C7C" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles['RegisterPageFormRemember']}>
            <label>
              <div className={styles['RegisterPageFormRememberCheckbox']}>
                <input disabled={false} type="checkbox" name="remember_me" />
                <div className={styles['RegisterPageFormRememberCheckboxIndicator']} />
              </div>

              <span>
                I agree to the <Link to="/terms" className={styles['RegisterPageTerms']}>Terms of use</Link> and <Link to="/privacy" className={styles['RegisterPageTerms']}>Privacy Policy</Link>
              </span>
            </label>
          </div>
          <button type="submit" className={styles['RegisterPageSubmit']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="261" height="48" viewBox="0 0 261 48" fill="none">
              <path d="M260.499 23.2959L226.808 48H0V24.5215L33.4453 0H260.499V23.2959Z" fill="#D9D9D9"/>
              <path d="M260.499 23.2959L226.808 48H0V24.5215L33.4453 0H260.499V23.2959Z" fill="url(#paint0_linear_361_2222)"/>
              <defs>
                <linearGradient id="paint0_linear_361_2222" x1="0" y1="24" x2="260.499" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#42E6A4"/>
                  <stop offset="1" stopColor="#7A5CFF"/>
                </linearGradient>
              </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="271" height="56" viewBox="0 0 271 56" fill="none">
              <mask id="path-1-inside-1_361_2226" fill="white">
                <path d="M271 28.7646L234.944 56H0V27.6846L36.5303 0H271V28.7646Z"/>
              </mask>
              <path d="M271 28.7646L271.603 29.5626L272 29.2625V28.7646H271ZM234.944 56V57H235.28L235.547 56.7979L234.944 56ZM0 56H-1V57H0V56ZM0 27.6846L-0.603998 26.8876L-1 27.1877V27.6846H0ZM36.5303 0V-1H36.1942L35.9263 -0.796986L36.5303 0ZM271 0H272V-1H271V0ZM271 28.7646L270.397 27.9667L234.342 55.2021L234.944 56L235.547 56.7979L271.603 29.5626L271 28.7646ZM234.944 56V55H0V56V57H234.944V56ZM0 56H1V27.6846H0H-1V56H0ZM0 27.6846L0.603998 28.4816L37.1343 0.796986L36.5303 0L35.9263 -0.796986L-0.603998 26.8876L0 27.6846ZM36.5303 0V1H271V0V-1H36.5303V0ZM271 0H270V28.7646H271H272V0H271Z" fill="url(#paint0_linear_361_2226)" mask="url(#path-1-inside-1_361_2226)"/>
              <defs>
                <linearGradient id="paint0_linear_361_2226" x1="0" y1="28" x2="271" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#42E6A4"/>
                  <stop offset="1" stopColor="#7A5CFF"/>
                </linearGradient>
              </defs>
            </svg>

            <span>CONTINUE</span>
          </button>
          <p className={styles['RegisterPageRegister']}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>

        <img className={styles['RegisterPageGamepad']} src="/game-pad.png" />
        <img className={styles['RegisterPageHeadphones']} src="/headphones.png" />

        <svg className={styles['RegisterPageTriangle']} width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 66.207V1.20703L65.5 66.207H0.5Z" fill="#F9B640" stroke="black"/>
        </svg>
      </div>
    </div>
  )
}

export default RegisterPage

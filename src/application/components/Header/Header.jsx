import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import styles from './styles.module.css'

function Header() {
  const location = useLocation();
  const header = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setFilled(true);
      } else {
        setFilled(false);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      setFilled(false);
    } else {
      header.current.classList.add(styles['HeaderFilled']);
      setFilled(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname])

  return (
    <header ref={header} className={`${styles['Header']} ${filled ? styles['HeaderFilled'] : ''}`}>
      <div className="container">
        <div className={styles['HeaderMain']}>
          <Link className={styles['HeaderLogo']} to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/">WATCH</Link>
              </li>
              <li>
                <Link to="/">COMMUNITY</Link>
              </li>
              <li>
                <Link to="/">COUNSELLING</Link>
              </li>
              <li>
                <Link to="/">GIVE</Link>
              </li>
              <li>
                <Link to="/">RESOURCES</Link>
              </li>
              <li>
                <Link to="/">STORE</Link>
              </li>
              <li>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="135" height="56" viewBox="0 0 135 56" fill="none">
                    <mask id="path-1-inside-1_361_2205" fill="white">
                      <path d="M134.276 28.7617L116.409 56H0V27.6826L18.0986 0H134.276V28.7617Z"/>
                    </mask>
                    <path d="M134.276 28.7617L135.113 29.3102L135.276 29.0604V28.7617H134.276ZM116.409 56V57H116.949L117.245 56.5485L116.409 56ZM0 56H-1V57H0V56ZM0 27.6826L-0.836991 27.1354L-1 27.3847V27.6826H0ZM18.0986 0V-1H17.5577L17.2616 -0.547217L18.0986 0ZM134.276 0H135.276V-1H134.276V0ZM134.276 28.7617L133.44 28.2132L115.573 55.4515L116.409 56L117.245 56.5485L135.113 29.3102L134.276 28.7617ZM116.409 56V55H0V56V57H116.409V56ZM0 56H1V27.6826H0H-1V56H0ZM0 27.6826L0.836991 28.2298L18.9356 0.547217L18.0986 0L17.2616 -0.547217L-0.836991 27.1354L0 27.6826ZM18.0986 0V1H134.276V0V-1H18.0986V0ZM134.276 0H133.276V28.7617H134.276H135.276V0H134.276Z" fill="url(#paint0_linear_361_2205)" mask="url(#path-1-inside-1_361_2205)"/>
                    <defs>
                      <linearGradient id="paint0_linear_361_2205" x1="0" y1="28" x2="134.276" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#42E6A4"/>
                        <stop offset="1" stopColor="#7A5CFF"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="125" height="48" viewBox="0 0 125 48" fill="none">
                    <path d="M124.896 23.2959L108.743 48H0V24.5215L16.0352 0H124.896V23.2959Z" fill="#D9D9D9"/>
                    <path d="M124.896 23.2959L108.743 48H0V24.5215L16.0352 0H124.896V23.2959Z" fill="url(#paint0_linear_361_2201)"/>
                    <defs>
                      <linearGradient id="paint0_linear_361_2201" x1="0" y1="24" x2="124.896" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#42E6A4"/>
                        <stop offset="1" stopColor="#7A5CFF"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  SIGN IN
                </button>
              </li>
            </ul>
          </nav>

          <button className={styles['HeaderMenuButton']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M18 6.75C18 6.94891 17.921 7.13968 17.7803 7.28033C17.6397 7.42098 17.4489 7.5 17.25 7.5H0.75C0.551088 7.5 0.360322 7.42098 0.21967 7.28033C0.0790178 7.13968 0 6.94891 0 6.75C0 6.55109 0.0790178 6.36032 0.21967 6.21967C0.360322 6.07902 0.551088 6 0.75 6H17.25C17.4489 6 17.6397 6.07902 17.7803 6.21967C17.921 6.36032 18 6.55109 18 6.75ZM0.75 1.5H17.25C17.4489 1.5 17.6397 1.42098 17.7803 1.28033C17.921 1.13968 18 0.948912 18 0.75C18 0.551088 17.921 0.360322 17.7803 0.21967C17.6397 0.0790178 17.4489 0 17.25 0H0.75C0.551088 0 0.360322 0.0790178 0.21967 0.21967C0.0790178 0.360322 0 0.551088 0 0.75C0 0.948912 0.0790178 1.13968 0.21967 1.28033C0.360322 1.42098 0.551088 1.5 0.75 1.5ZM17.25 12H0.75C0.551088 12 0.360322 12.079 0.21967 12.2197C0.0790178 12.3603 0 12.5511 0 12.75C0 12.9489 0.0790178 13.1397 0.21967 13.2803C0.360322 13.421 0.551088 13.5 0.75 13.5H17.25C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

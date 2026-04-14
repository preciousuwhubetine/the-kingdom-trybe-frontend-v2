import styles from './styles.module.css'

function ConfigurationStep2({
  nextStep,
}) {
  const submitForm = (e) => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div className={styles['ConfigurationStep2']}>
      <div className={styles['ConfigurationStep2Bg']} />
      <img className={styles['ConfigurationStep2Logo']} src="/logo.png" />

      <div className={styles['ConfigurationStep2Heading']}>
        <h1>Help us tailor your space</h1>
        <p>
          A few quick questions — under a minute.
        </p>
      </div>

      <form onSubmit={submitForm}>
        <button type='submit'>
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

          <span>Continue</span>
        </button>
      </form>
    </div>
  )
}

export default ConfigurationStep2

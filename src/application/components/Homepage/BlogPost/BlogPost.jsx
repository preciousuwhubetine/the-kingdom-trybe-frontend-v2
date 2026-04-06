import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function HomepageBlogPost() {
  return (
    <div className={styles['BlogPost']}>
      <img src="/latest-blog-post-image.jpg" alt="Blog Post" className={styles['BlogPostImage']} />

      <div className={styles['BlogPostContent']}>
        <div className={styles['BlogPostContentMain']}>
          <h4>Latest</h4>

          <h3>When worship feels like your favorite stream</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies
          </p>

          <div className={styles['BlogPostContentMainRead']}>
            <Link to="/blog-post">
              Read

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <p>
              4 Min read. Oct 12, 2025
            </p>
          </div>
        </div>

        <svg width="760" height="282" viewBox="0 0 760 282" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_361_2610)">
          <path d="M4.50146 0.5C4.74895 85 5.09543 256.1 4.50146 264.5V273.5H336.753L382.001 221.5H726.174L755.501 182V46H155.001L121.219 0.5H4.50146Z" fill="#272727" fillOpacity="0.9" shapeRendering="crispEdges"/>
          <path d="M4.50146 0.5C4.74895 85 5.09543 256.1 4.50146 264.5V273.5H336.753L382.001 221.5H726.174L755.501 182V46H155.001L121.219 0.5H4.50146Z" stroke="#272727" shapeRendering="crispEdges"/>
          <path d="M4.50146 0.5C4.74895 85 5.09543 256.1 4.50146 264.5V273.5H336.753L382.001 221.5H726.174L755.501 182V46H155.001L121.219 0.5H4.50146Z" stroke="url(#paint0_linear_361_2610)" shapeRendering="crispEdges"/>
          </g>
          <defs>
          <filter id="filter0_d_361_2610" x="0" y="0" width="760.001" height="282" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_361_2610"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_361_2610" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_361_2610" x1="4.50146" y1="137" x2="755.501" y2="137" gradientUnits="userSpaceOnUse">
          <stop stopColor="#42E6A4"/>
          <stop offset="1" stopColor="#7A5CFF"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default HomepageBlogPost

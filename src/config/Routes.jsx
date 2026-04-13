import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

import Header from "../application/components/Header/Header.jsx"
import Footer from "../application/components/Footer/Footer.jsx"

import HomePage from "../application/views/HomePage/HomePage.jsx"
import LoginPage from "../application/views/LoginPage/LoginPage.jsx";

export default function Config () {
  const location = useLocation();
  const session = useSelector((state) => state.session)
  const [redirectURL, setRedirectURL] = useState(new URLSearchParams(window.location.search).get('redirect') || '/profile');

  useEffect(() => {
    setRedirectURL(new URLSearchParams(window.location.search).get('redirect') || '/profile');
  }, [location.pathname]);

  return (
    <>
      <Header
        hide={location.pathname === '/login' || location.pathname === '/register'}
      />

      <Routes>
        {
          // session.active && (
          //   <>
          //     <Route path="/register" element={<Navigate to={redirectURL} />} />
          //     <Route path="/login" element={<Navigate to={redirectURL} />} />
          //   </>
          // )
        }

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer
        hide={location.pathname === '/login' || location.pathname === '/register'}
      />
    </>

  )
}

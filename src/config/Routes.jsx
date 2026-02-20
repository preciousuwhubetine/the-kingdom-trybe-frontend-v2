import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

import HomePage from "../application/views/HomePage/HomePage.jsx"

export default function Config () {
  const location = useLocation();
  const session = useSelector((state) => state.session)
  const [redirectURL, setRedirectURL] = useState(new URLSearchParams(window.location.search).get('redirect') || '/profile');

  useEffect(() => {
    setRedirectURL(new URLSearchParams(window.location.search).get('redirect') || '/profile');
  }, [location.pathname]);

  return (
    <Routes>
      {
        // session.active && (
        //   <>
        //     <Route path="/register" element={<Navigate to={redirectURL} />} />
        //     <Route path="/login" element={<Navigate to={redirectURL} />} />
        //   </>
        // )
      }

      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

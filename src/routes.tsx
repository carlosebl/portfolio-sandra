import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './Pages/Home'
import HomeEnglish from './Pages/HomeEnglish'
import Projects from './Pages/Projects'
import ProjectsEnglish from './Pages/ProjectsEnglish'
import Goodwork from './Pages/Goodwork'
import GoodworkEnglish from './Pages/GoodworkEnglish'
import Cva from './Pages/CVA'
import CvaEnglish from './Pages/CvaEnglish'
import DesignSystem from './Pages/DesignSystem'
import DesignSystemEnglish from './Pages/DesignSystemEnglish'
import Contact from './Pages/Contact'
import ContactEnglish from './Pages/ContactEnglish'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const PageRoutes = () => (
  <Routes>
    {ScrollToTop()}
    <Route path="/" element={<Home />} />
    <Route path="/en" element={<HomeEnglish />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects_english" element={<ProjectsEnglish />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/contact_english" element={<ContactEnglish />} />
    <Route path="/goodwork" element={<Goodwork />} />
    <Route path="/goodwork_english" element={<GoodworkEnglish />} />
    <Route path="/cva" element={<Cva />} />
    <Route path="/cva_english" element={<CvaEnglish />} />
    <Route path="/design-system" element={<DesignSystem />} />
    <Route path="/design-system_english" element={<DesignSystemEnglish />} />
  </Routes>
)

export default PageRoutes

import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Goodwork from './Pages/Goodwork'

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/goodwork" element={<Goodwork />} />
  </Routes>
)

export default PageRoutes

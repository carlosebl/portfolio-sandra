import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Trajectory from './Pages/Trajectory'
import Projects from './Pages/Projects'

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/trajectory" element={<Trajectory />} />
  </Routes>
)

export default PageRoutes

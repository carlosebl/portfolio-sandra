import AboutMe from '../../Components/AboutMe'
import Chips from '../../Components/Chips'
import Intro from '../../Components/Intro'
import ProjectsSection from '../../Components/ProjectsSection'

const Home = () => (
  <div className="container">
    <Intro />
    <Chips />
    <ProjectsSection />
    <AboutMe />
  </div>
)

export default Home

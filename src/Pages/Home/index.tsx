import AboutMe from '../../Components/portuguese/AboutMe'
import Chips from '../../Components/Chips'
import Intro from '../../Components/portuguese/Intro'
import ProjectsSection from '../../Components/portuguese/ProjectsSection'
import Header from '../../Components/portuguese/Header'

const Home = () => (
  <div className="container">
    <Header />
    <Intro />
    <Chips />
    <ProjectsSection />
    <AboutMe />
  </div>
)

export default Home

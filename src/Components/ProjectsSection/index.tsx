import { Link } from 'react-router-dom'

import { ProjectCards, ProjectsContainer, ProjectsTitle } from './styles'

import coracao from '../../assets/images/coracao_small.png'
import Card from '../Card'

const ProjectsSection = () => (
  <ProjectsContainer>
    <ProjectsTitle>
      <h3>Projetos</h3>
      <Link to={'/projects'}>
        <p>Mais</p>
        <img src={coracao} />
      </Link>
    </ProjectsTitle>
    <ProjectCards>
      <Card />
      <Card />
      <Card />
    </ProjectCards>
  </ProjectsContainer>
)

export default ProjectsSection

import { ProjectCards, ProjectsContainer, ProjectsTitle } from './styles'

import coracao from '../../assets/images/coracao_small.png'
import Card from '../Card'

const ProjectsSection = () => (
  <ProjectsContainer>
    <ProjectsTitle>
      <h3>Projetos</h3>
      <a href="#">
        <p>Mais</p>
        <img src={coracao} />
      </a>
    </ProjectsTitle>
    <ProjectCards>
      <Card />
      <Card />
      <Card />
    </ProjectCards>
  </ProjectsContainer>
)

export default ProjectsSection

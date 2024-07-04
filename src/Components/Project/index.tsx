import { ProjectsContainer } from '../ProjectsSection/styles'
import { ProjectCoverImg, ProjectDetails, ProjectTitle } from './styles'

import goodwork from '../../assets/images/goodwork2.png'

const Project = () => (
  <div className="container">
    <ProjectsContainer>
      <ProjectCoverImg src={goodwork} alt="Goodwork" />
      <ProjectTitle>
        Transformando a saúde mental no trabalho:
        <br />A jornada do GoodWork Valou
      </ProjectTitle>
      <ProjectDetails>
        <div>
          <h4>TIPO</h4>
          <p>App IOS a Android</p>
        </div>
        <div>
          <h4>ANO</h4>
          <p>2023/2024</p>
        </div>
        <div>
          <h4>EMPRESA</h4>
          <p>
            Bridge Management Technologies® e empresas
            <br />
            parceiras. (Site do projeto)
          </p>
        </div>
      </ProjectDetails>
    </ProjectsContainer>
  </div>
)

export default Project

import {
  ProjectContainer,
  ProjectCoverImg,
  ProjectDetails,
  ProjectTitle
} from './styles'

export type Props = {
  img: string
  title: JSX.Element
  system: string
  year: string
  company: string
  background: 'yellow' | 'blue'
}

const Project = ({ img, title, system, year, company, background }: Props) => (
  <div className="container">
    <ProjectContainer background={background}>
      <ProjectCoverImg src={img} alt="" />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDetails>
        <div>
          <h4>TIPO</h4>
          <p>{system}</p>
        </div>
        <div>
          <h4>ANO</h4>
          <p>{year}</p>
        </div>
        <div>
          <h4>EMPRESA</h4>
          <p>{company}</p>
        </div>
      </ProjectDetails>
    </ProjectContainer>
  </div>
)

export default Project

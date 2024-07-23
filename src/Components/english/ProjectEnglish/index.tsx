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

const ProjectEnglish = ({
  img,
  title,
  system,
  year,
  company,
  background
}: Props) => (
  <div className="container">
    <ProjectContainer background={background}>
      <ProjectCoverImg src={img} alt="" />
      <ProjectTitle background={background}>{title}</ProjectTitle>
      <ProjectDetails>
        <div>
          <h4>TYPE</h4>
          <p>{system}</p>
        </div>
        <div>
          <h4>YEAR</h4>
          <p>{year}</p>
        </div>
        <div>
          <h4>COMPANY</h4>
          <p>{company}</p>
        </div>
      </ProjectDetails>
    </ProjectContainer>
  </div>
)

export default ProjectEnglish

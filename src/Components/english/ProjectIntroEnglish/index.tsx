import {
  ProjecIntroContainer,
  ProjectIntroCompany,
  ProjectIntroInfo
} from './styles'

type Props = {
  title: JSX.Element
  description: string
  system: string
  year: string
  company: string
}

const ProjectIntroEnglish = ({
  title,
  description,
  system,
  year,
  company
}: Props) => {
  return (
    <ProjecIntroContainer>
      <h3>{title}</h3>
      <ProjectIntroInfo>
        <p>{description}</p>
        <ProjectIntroCompany>
          <div>
            <h4>TYPE</h4>
            <p>{system}</p>
          </div>
          <div>
            <h4>Year</h4>
            <p>{year}</p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <p>{company}</p>
          </div>
        </ProjectIntroCompany>
      </ProjectIntroInfo>
    </ProjecIntroContainer>
  )
}

export default ProjectIntroEnglish

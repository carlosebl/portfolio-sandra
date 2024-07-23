import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ProjectCards, ProjectsContainer, ProjectsTitle } from './styles'
import Card from '../../Card'

import coracao from '../../../assets/images/coracao_small.png'
import coracaoHover from '../../../assets/images/coracao_small_hover.png'
import goodwork from '../../../assets/images/goodwork1.png'
import designSystem from '../../../assets/images/ds1.png'
import cva from '../../../assets/images/cva1.png'

export type Props = {
  bg: 'yellow' | 'blue' | 'white'
}

const ProjectsSection = () => {
  const [mapCoracao, setMapCoracao] = useState(coracao)

  return (
    <ProjectsContainer>
      <ProjectsTitle>
        <h3>Projects</h3>
        <Link to={'/projects_english'}>
          <p>More</p>
          <img
            src={mapCoracao}
            onMouseEnter={() => {
              setMapCoracao(coracaoHover)
            }}
            onMouseLeave={() => {
              setMapCoracao(coracao)
            }}
          />
        </Link>
      </ProjectsTitle>
      <ProjectCards>
        <Link to={'/goodwork_english'}>
          <Card
            img={goodwork}
            title={'AThe journey of GoodWork Valou'}
            year={'2023/24'}
            description={
              'The challenge of creating a company culture and climate management application.'
            }
          />
        </Link>
        <Link to={'/design-system_english'}>
          <Card
            img={designSystem}
            title={'Building a Design System'}
            year={'2022/23'}
            description={
              'Collaborating in search of a design system for a business management platform.'
            }
          />
        </Link>
        <Link to={'/cva_english'}>
          <Card
            img={cva}
            title={'Searching for simplicity'}
            year={'2022'}
            description={
              'Redesign of the Customer Value Analysis, a new face for the market analysis tool.'
            }
          />
        </Link>
      </ProjectCards>
    </ProjectsContainer>
  )
}

export default ProjectsSection

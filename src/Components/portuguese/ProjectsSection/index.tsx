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
        <h3>Projetos</h3>
        <Link to={'/projects'}>
          <p>Mais</p>
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
        <Link to={'goodwork'}>
          <Card
            img={goodwork}
            title={'A Jornada do GoodWork Valou'}
            year={'2023/24'}
            description={
              'O desafio de criação de um aplicativo de gerenciamento de clima empresarial.'
            }
          />
        </Link>
        <Link to={'design-system'}>
          <Card
            img={designSystem}
            title={'Formando um Design System'}
            year={'2022/23'}
            description={
              'Colaborando em busca de um design system de uma plataforma de gerenciamento de empresas.'
            }
          />
        </Link>
        <Link to={'cva'}>
          <Card
            img={cva}
            title={'Buscando a simplicidade'}
            year={'2022'}
            description={
              'Redesign do Customer Value Analysis, uma ferramenta de análise de mercado.'
            }
          />
        </Link>
      </ProjectCards>
    </ProjectsContainer>
  )
}

export default ProjectsSection

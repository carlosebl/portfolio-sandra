import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

export const ProjectContainer = styled.section<
  Omit<Props, 'img' | 'title' | 'system' | 'year' | 'company'>
>`
  padding: 80px;
  background-color: ${(props) =>
    props.background === 'yellow' ? colors.yellowBg : colors.blueBg};

  color: ${(props) =>
    props.background === 'yellow' ? colors.primaryText : colors.whiteBg};
`

export const ProjectCoverImg = styled.img`
  max-width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
`

export const ProjectTitle = styled.h3`
  font-size: 48px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 0.28px;
  margin-bottom: 24px;
`

export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.08px;
    margin-bottom: 12px;
  }

  p {
    line-height: 20px;
    letter-spacing: 0.08px;
  }
`

import styled from 'styled-components'

import { breakpoints, colors } from '../../../styles'
import { Props } from '.'

export const ProjectContainer = styled.section<
  Omit<Props, 'img' | 'title' | 'system' | 'year' | 'company'>
>`
  padding: 80px;
  background-color: ${(props) =>
    props.background === 'yellow' ? colors.yellowBg : colors.blueBg};

  color: ${(props) =>
    props.background === 'yellow' ? colors.primaryText : colors.whiteBg};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 20px;
  }
`

export const ProjectCoverImg = styled.img`
  max-width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 430px;
    object-fit: cover;
  }
`

export const ProjectTitle = styled.h3<
  Omit<Props, 'img' | 'title' | 'system' | 'year' | 'company'>
>`
  font-size: 48px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 0.28px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
    font-weight: normal;
    line-height: 48px;
    letter-spacing: 0.2px;
  }

  a {
    text-decoration: none;
    color: ${(props) =>
      props.background === 'yellow' ? colors.primaryText : colors.whiteBg};
  }
`

export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

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

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 24px;
    }
  }
`

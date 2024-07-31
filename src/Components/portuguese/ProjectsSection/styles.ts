import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const ProjectsContainer = styled.section`
  padding: 80px;
  background-color: ${colors.yellowBg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }

  a {
    text-decoration: none;
  }
`

export const ProjectsTitle = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 20px;
  }

  h3 {
    color: ${colors.primaryText};
    font-size: 40px;
    font-weight: normal;
    line-height: 448px;
    letter-spacing: 0.2px;
  }

  > a {
    color: ${colors.secondaryText};
    display: flex;
    text-decoration: none;

    > p {
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.1px;
      margin-right: 12px;
      display: flex;
      align-items: center;
    }
  }
`

export const ProjectCards = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const ProjecIntroContainer = styled.section`
  padding-top: 80px;
  color: ${colors.primaryText};
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 20px;
  }

  h3 {
    margin-top: 80px;
    font-size: 56px;
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
  }
`

export const ProjectIntroInfo = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  > p {
    max-width: 628px;
    width: 100%;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.1px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 24px;
    }
  }
`

export const ProjectIntroCompany = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    color: ${colors.secondaryText};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.08px;
    margin-bottom: 4px;
  }

  p {
    line-height: 20px;
    letter-spacing: 0.08px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 24px;
    }
  }
`

import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const AbouteMeContainer = styled.section`
  padding: 120px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    padding: 120px 20px;
  }

  h3 {
    color: ${colors.primaryText};
    font-size: 40px;
    font-weight: normal;
    line-height: 48px;
    letter-spacing: 0.2px;
    margin-bottom: 24px;
  }
`

export const AboutMeInfo = styled.div`
  max-width: 736px;
  width: 100%;

  p {
    margin: 0;
    color: ${colors.primaryText};
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.1px;
  }
`

export const SandraPic = styled.img`
  border: 2px solid ${colors.secondaryText};
  border-radius: 300px;
  background-color: ${colors.yellowBg};
  box-shadow: 2px 2px 2px 0 ${colors.secondaryText};
  margin-bottom: 60px;
`

export const Contact = styled.div`
  margin: 32px 0;
  display: flex;
  align-items: center;

  a {
    margin-left: 16px;
    color: ${colors.primaryText};
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.36px;
    text-decoration: none;
  }
`

import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const FooterContainer = styled.footer`
  padding: 80px;
  background-color: ${colors.blueBg};
  text-align: center;
  color: ${colors.whiteBg};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
    text-align: left;
  }

  h3 {
    margin-bottom: 80px;
    font-size: 40px;
    font-weight: normal;
    line-height: 48px;
    letter-spacing: 0.2px;
  }
`

export const FooterContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 40px;
    }

    > img {
      color: ${colors.whiteBg};
      margin-right: 16px;
    }

    > a {
      text-decoration: none;
      color: ${colors.whiteBg};
    }
  }
`

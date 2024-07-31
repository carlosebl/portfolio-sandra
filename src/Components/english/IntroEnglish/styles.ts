import { styled } from 'styled-components'

import { breakpoints, colors } from '../../../styles'

export const IntroContainer = styled.section`
  width: 100%;
  padding: 116px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
    padding: 116px 20px;
  }

  h1 {
    color: ${colors.secondaryText};
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: 0.08px;
    margin-bottom: 12px;
    margin-top: 80px;
    display: none;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }

  h3 {
    color: ${colors.secondaryText};
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: 0.08px;
    margin-bottom: 12px;
    margin-top: 80px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 0;
    }
  }
`

export const SloganContainer = styled.div`
  h2 {
    color: ${colors.primaryText};
    font-size: 96px;
    font-weight: normal;
    line-height: 112px;
    letter-spacing: 0.96px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 56px;
      line-height: 72px;
      letter-spacing: 0.28px;
    }
  }
`

export const Asterisco = styled.img`
  margin-top: -12px;
  margin-left: 490px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 300px;
  }
`

export const Coracao = styled.img`
  margin-bottom: -24px;
  margin-left: 856px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 300px;
  }
`

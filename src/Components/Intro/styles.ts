import { styled } from 'styled-components'

import { colors } from '../../styles'

export const IntroContainer = styled.section`
  width: 100%;
  padding: 116px 80px;

  h3 {
    color: ${colors.secondaryText};
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: 0.08px;
    margin-bottom: 12px;
  }
`

export const SloganContainer = styled.div`
  h2 {
    color: ${colors.primaryText};
    font-size: 96px;
    font-weight: normal;
    line-height: 112px;
    letter-spacing: 0.96px;
  }
`

export const Asterisco = styled.img`
  margin-top: -12px;
  margin-left: 490px;
`

export const Coracao = styled.img`
  margin-bottom: -24px;
  margin-left: 856px;
`

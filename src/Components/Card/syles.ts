import styled from 'styled-components'
import { Chip } from '../Chips/styles'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${colors.whiteBg};
  max-width: 426px;
  width: 100%;

  img {
    max-width: 100%;
    object-fit: cover;
  }
`

export const CardInfo = styled.div`
  padding: 20px;

  h4 {
    color: ${colors.primaryText};
    font-size: 40px;
    font-weight: normal;
    line-height: 48px;
    letter-spacing: 0.2px;
    margin-bottom: 24px;
  }

  ${Chip} {
    max-width: 102px;
    justify-content: center;
    margin-bottom: 24px;
  }

  p {
    color: ${colors.primaryText};
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.1px;
  }
`

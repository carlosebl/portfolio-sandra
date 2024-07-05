import { styled } from 'styled-components'
import { colors } from '../../styles'

export const CoverImg = styled.img`
  max-width: 100%;
  margin-bottom: 120px;
`
export const Title = styled.h3`
  font-size: 40px;
  font-weight: normal;
  line-height: 48px;
  letter-spacing: 0.2px;
  margin-bottom: 24px;
`

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.1px;
`

export const Characters = styled.section`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  color: ${colors.primaryText};
  padding-bottom: 120px;

  img {
    max-width: 620px;
    width: 100%;
  }
`

export const Challenge = styled.section`
  color: ${colors.primaryText};
  padding-bottom: 120px;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
`

export const GoodworkSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  color: ${colors.primaryText};
  padding-bottom: 120px;
`

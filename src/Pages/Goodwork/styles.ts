import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CoverImg = styled.img`
  max-width: 100%;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 674px;
    object-fit: cover;
  }
`
export const Title = styled.h3`
  font-size: 40px;
  font-weight: normal;
  line-height: 48px;
  letter-spacing: 0.2px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }
`

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.1px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
    margin-bottom: 40px;
  }
`

export const TwoCols = styled.section`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  color: ${colors.primaryText};
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  img {
    max-width: 620px;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      width: 390px;
      margin-left: 20px;
      margin-bottom: 40px;
    }
  }
`

export const Challenge = styled.section`
  color: ${colors.primaryText};
  padding-bottom: 120px;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`

export const GoodworkSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  color: ${colors.primaryText};
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  > img {
    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      padding: 0 16px;
      margin-bottom: 40px;
    }
  }
`

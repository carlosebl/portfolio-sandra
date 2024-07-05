import styled from 'styled-components'
import { colors } from '../../styles'

export const ProjecIntroContainer = styled.section`
  padding-top: 80px;
  color: ${colors.primaryText};
  padding-bottom: 120px;

  h3 {
    margin-top: 80px;
    font-size: 56px;
    font-weight: 500;
    line-height: 72px;
    letter-spacing: 0.28px;
    margin-bottom: 24px;
  }
`

export const ProjectIntroInfo = styled.div`
  display: flex;
  justify-content: space-between;

  > p {
    max-width: 628px;
    width: 100%;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.1px;
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
  }
`

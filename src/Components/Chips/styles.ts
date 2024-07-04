import styled from 'styled-components'
import { colors } from '../../styles'

export const ChipsContainer = styled.section`
  padding: 0px 80px 80px 80px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  gap: 24px;
  flex-wrap: wrap;
`
export const Chip = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 20px 10px;
  border: 2px solid ${colors.secondaryText};
  border-radius: 56px;
  box-shadow: 2px 2px 0 0 ${colors.secondaryText};
  color: ${colors.secondaryText};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08px;
`

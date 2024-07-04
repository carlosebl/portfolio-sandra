import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  position: fixed;
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  background-color: ${colors.whiteBg};

  h1 {
    color: ${colors.secondaryText};
    font-size: 20px;
    font-weight: normal;
    line-height: 32px;
    letter-spacing: 0.1px;
  }

  nav {
    display: flex;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
    color: ${colors.secondaryText};
    font-size: 20px;
    font-weight: normal;
    line-height: 32px;
    letter-spacing: 0.1px;

    &:hover {
      color: ${colors.primaryText};
    }
  }
`

export const MainMenu = styled.ul`
  display: flex;

  li {
    margin-right: 48px;
  }
`

export const LanguageMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

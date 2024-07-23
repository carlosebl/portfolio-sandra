import styled from 'styled-components'
import { colors } from '../../../styles'

type Props = {
  isActive: boolean
}

export const HeaderContainer = styled.header`
  position: fixed;
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  background-color: ${colors.whiteBg};
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.1);

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

export const LanguageMenuItem = styled.li<Props>`
  padding: 0 6px;
  background-color: ${(props) =>
    props.isActive ? `${colors.yellowBg}` : `${colors.whiteBg}`};

  a {
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
    letter-spacing: ${(props) => (props.isActive ? '0.14px' : '0.1px')};
  }
`

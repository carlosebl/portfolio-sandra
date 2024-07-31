import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    padding: 8px;
  }

  h1 {
    color: ${colors.secondaryText};
    font-size: 20px;
    font-weight: normal;
    line-height: 32px;
    letter-spacing: 0.1px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
      margin-right: 16px;
    }
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${colors.secondaryText};
    font-size: 20px;
    font-weight: normal;
    line-height: 32px;
    letter-spacing: 0.1px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }

    &:hover {
      color: ${colors.primaryText};
    }
  }
`

export const MainMenu = styled.ul`
  display: flex;

  li {
    margin-right: 48px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-right: 20px;
    }
  }
`

export const LanguageMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 8px;
  }
`

export const LanguageMenuItem = styled.li<Props>`
  padding: 0 6px;
  background-color: ${(props) =>
    props.isActive ? `${colors.yellowBg}` : `${colors.whiteBg}`};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1px 6px;
  }

  a {
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
    letter-spacing: ${(props) => (props.isActive ? '0.14px' : '0.1px')};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }
`

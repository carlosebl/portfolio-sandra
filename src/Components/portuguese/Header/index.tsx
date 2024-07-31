import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  LanguageMenu,
  LanguageMenuItem,
  MainMenu
} from './styles'

const Header = () => (
  <HeaderContainer>
    <nav>
      <Link to={'/'}>
        <h1>Sandra Bordini</h1>
      </Link>
      <MainMenu>
        <li>
          <Link to={'/projects'}>Projetos</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contato</Link>
        </li>
      </MainMenu>
      <LanguageMenu>
        <LanguageMenuItem isActive={false}>
          <Link to="/en">En</Link>
        </LanguageMenuItem>
        <LanguageMenuItem isActive={true}>
          <a href="">Pt</a>
        </LanguageMenuItem>
      </LanguageMenu>
    </nav>
  </HeaderContainer>
)

export default Header

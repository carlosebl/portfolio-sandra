import { Link } from 'react-router-dom'

import { HeaderContainer, LanguageMenu, MainMenu } from './styles'

const Header = () => (
  <HeaderContainer>
    <Link to={'/'}>
      <h1>Sandra Bordini</h1>
    </Link>
    <nav>
      <MainMenu>
        <li>
          <a href="#">Trajetória</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Sobre mim</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </MainMenu>
      <LanguageMenu>
        <li>
          <a href="#">En</a>
        </li>
        <li>
          <a href="#">Pt</a>
        </li>
      </LanguageMenu>
    </nav>
  </HeaderContainer>
)

export default Header

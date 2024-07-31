import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  LanguageMenu,
  LanguageMenuItem,
  MainMenu
} from './styles'

const HeaderEnglish = () => (
  <HeaderContainer>
    <Link to={'/en'}>
      <h1>Sandra Bordini</h1>
    </Link>
    <nav>
      <MainMenu>
        <li>
          <Link to={'/projects_english'}>Projects</Link>
        </li>
        <li>
          <Link to={'/contact_english'}>Contact</Link>
        </li>
      </MainMenu>
      <LanguageMenu>
        <LanguageMenuItem isActive={true}>
          <a href="">En</a>
        </LanguageMenuItem>
        <LanguageMenuItem isActive={false}>
          <a href="/">Pt</a>
        </LanguageMenuItem>
      </LanguageMenu>
    </nav>
  </HeaderContainer>
)

export default HeaderEnglish

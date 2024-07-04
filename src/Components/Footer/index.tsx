import { FooterContacts, FooterContainer } from './styles'

import linkedin from '../../assets/images/linkedin2.svg'
import mail from '../../assets/images/mail2.svg'

const Footer = () => (
  <FooterContainer>
    <h3>Entre em contato:</h3>
    <FooterContacts>
      <div>
        <img src={linkedin} alt="Linkedin" />
        <a href="https://linkedin.com/in/sandrabordini">
          linkedin.com/in/sandrabordini
        </a>
      </div>
      <div>
        <img src={mail} alt="Envelope" />
        <a href="mailto:sandrabordini@gmail.com">sandrabordini@gmail.com</a>
      </div>
    </FooterContacts>
  </FooterContainer>
)

export default Footer

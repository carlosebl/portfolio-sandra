import { AboutMeInfo, AbouteMeContainer, Contact, SandraPic } from './styles'

import sandra from '../../assets/images/sandra.png'
import linkedin from '../../assets/images/linkedin.svg'
import mail from '../../assets/images/mail.svg'

const AboutMe = () => (
  <AbouteMeContainer>
    <AboutMeInfo>
      <h3>Quem sou</h3>
      <p>
        👋🏻 Product designer com uma ampla gama de experiências onde trabalhei em
        diversos projetos e cenários.
        <br />
        <br />
        ❤️ Meu principal propósito é a criação de produtos digitais inovadores e
        bonitos focados em pessoas que contemplem os objetivos de negócios.
        <br />
        <br />
        Acredito em design de pessoas para pessoas. Em promover cultura de
        design e empatia ao usuário na empresa como um todo, envolvendo
        diferentes team players e steakeholders no processo de design.
        🧒🏼🧑🏽👩🏽🧑🏿‍🦱👩🏼‍🦱👨🏼‍🦰🧔🏾
        <br />
        <br />
        💡 Em minha carreira já atuei em todas as etapas do processo de design,
        do discovery ao handoff.
        <br />
        <br />
        👩🏼‍🎓 Formada na área de comunicação, sempre continuei buscando conteúdos e
        investindo em cursos para me atualizar e adaptar ao mercado em constante
        mudanças.
      </p>
    </AboutMeInfo>
    <div>
      <SandraPic src={sandra} alt="Sandra Bordini" />
      <h3>Entre em contato</h3>
      <Contact>
        <img src={linkedin} alt="Linkedin" />
        <a href="https://linkedin.com/in/sandrabordini">
          linkedin.com/in/sandrabordini
        </a>
      </Contact>
      <Contact>
        <img src={mail} alt="Envelope" />
        <a href="mailto:sandrabordini@gmail.com">sandrabordini@gmail.com</a>
      </Contact>
    </div>
  </AbouteMeContainer>
)

export default AboutMe

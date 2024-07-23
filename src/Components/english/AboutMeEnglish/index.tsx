import { AboutMeInfo, AbouteMeContainer, Contact, SandraPic } from './styles'

import sandra from '../../../assets/images/sandra.png'
import linkedin from '../../../assets/images/linkedin.svg'
import mail from '../../../assets/images/mail.svg'

const AboutMeEnglish = () => (
  <AbouteMeContainer>
    <AboutMeInfo>
      <h3>About me</h3>
      <p>
        👋🏻 Product designer with a wide range of experience where I worked with
        many projects and scenarios.
        <br />
        <br />
        ❤️ My main purpose is to create innovative beautiful digital products
        focused on people that meet business objectives.
        <br />
        <br />
        I believe in promoting design culture and user empathy in the company as
        a whole, involving different team players and stakeholders in the design
        process.🧒🏼🧑🏽👩🏽🧑🏿‍🦱👩🏼‍🦱👨🏼‍🦰🧔🏾
        <br />
        <br />
        💡 In my career I have worked on all stages of the design process, from
        discovery to handoff.
        <br />
        <br />
        👩🏼‍🎓 Graduated in the area of communication, I always continued to seek
        content and invest in courses to update myself and adapt to the
        constantly changing market.
      </p>
    </AboutMeInfo>
    <div>
      <SandraPic src={sandra} alt="Sandra Bordini" />
      <h3>Contact me</h3>
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

export default AboutMeEnglish

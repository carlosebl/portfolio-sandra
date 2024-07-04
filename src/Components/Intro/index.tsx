import { Asterisco, Coracao, IntroContainer, SloganContainer } from './styles'

import asterisco from '../../assets/images/asterisco.png'
import coracao from '../../assets/images/coracao.png'

const Intro = () => (
  <IntroContainer>
    <h3>Senior product designer</h3>
    <SloganContainer>
      <Asterisco src={asterisco} />
      <h2>
        Design
        <br />
        estratégico para pessoas e negócios
      </h2>
      <Coracao src={coracao} />
    </SloganContainer>
  </IntroContainer>
)

export default Intro

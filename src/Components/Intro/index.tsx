import { useState } from 'react'

import { Asterisco, Coracao, IntroContainer, SloganContainer } from './styles'

import asterisco from '../../assets/images/asterisco.png'
import asteriscoBlack from '../../assets/images/asterisco_black.png'
import coracao from '../../assets/images/coracao.png'
import coracaoBlack from '../../assets/images/coracao_black.png'

const Intro = () => {
  const [mapAsterisco, setMapAsterisco] = useState(asterisco)
  const [mapCoracao, setMapCoracao] = useState(coracao)

  return (
    <IntroContainer>
      <h3>Senior product designer</h3>
      <SloganContainer>
        <Asterisco
          src={mapAsterisco}
          onMouseEnter={() => {
            setMapAsterisco(asteriscoBlack)
          }}
          onMouseLeave={() => {
            setMapAsterisco(asterisco)
          }}
        />
        <h2>
          Design
          <br />
          estratégico para pessoas e negócios
        </h2>
        <Coracao
          src={mapCoracao}
          onMouseEnter={() => {
            setMapCoracao(coracaoBlack)
          }}
          onMouseLeave={() => {
            setMapCoracao(coracao)
          }}
        />
      </SloganContainer>
    </IntroContainer>
  )
}

export default Intro

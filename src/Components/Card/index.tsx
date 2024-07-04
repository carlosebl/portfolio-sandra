import { CardContainer, CardInfo } from './syles'
import { Chip } from '../Chips/styles'

import goodwork from '../../assets/images/goodwork1.png'

const Card = () => (
  <CardContainer>
    <img src={goodwork} />
    <CardInfo>
      <h4>A jornada do GoodWork Valou</h4>
      <Chip>2023/24</Chip>
      <p>
        O desafio de criação de um aplicativo de gerenciamento de clima
        empresarial.
      </p>
    </CardInfo>
  </CardContainer>
)

export default Card

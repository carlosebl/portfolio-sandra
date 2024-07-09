import { CardContainer, CardInfo } from './syles'
import { Chip } from '../Chips/styles'

type Props = {
  img: string
  title: string
  year: string
  description: string
}

const Card = ({ img, title, year, description }: Props) => (
  <CardContainer>
    <img src={img} />
    <CardInfo>
      <h4>{title}</h4>
      <Chip>{year}</Chip>
      <p>{description}</p>
    </CardInfo>
  </CardContainer>
)

export default Card

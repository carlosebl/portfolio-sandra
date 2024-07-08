import ProjectIntro from '../../Components/ProjectIntro'
import { Chip, ChipsContainer } from '../../Components/Chips/styles'
import { CoverImg, Paragraph, Title, TwoCols } from '../Goodwork/styles'

import cover1 from '../../assets/images/cva2.png'
import cover2 from '../../assets/images/cva4.png'
import cover3 from '../../assets/images/cva5.png'
import cover4 from '../../assets/images/cva6.png'
import img2 from '../../assets/images/cva3.png'
import Footer from '../../Components/Footer'

const Cva = () => (
  <>
    <div className="container">
      <ProjectIntro />
      <CoverImg src={cover1} />
      <ChipsContainer>
        <Chip>Design strategy</Chip>
        <Chip>Results oriented</Chip>
        <Chip>Product Design</Chip>
        <Chip>EX Design</Chip>
        <Chip>Advanced English</Chip>
        <Chip>Figma</Chip>
        <Chip>UI Design</Chip>
        <Chip>Figjam</Chip>
        <Chip>B2B</Chip>
      </ChipsContainer>
      <TwoCols>
        <img src={img2} alt="" />
        <div>
          <Title>
            Reinventando a avaliação de valor do cliente: a nova cara do CVA
          </Title>
          <Paragraph>
            Customer Value Analysis é uma metodologia de análise de mercado que
            atribui notas a critérios de avaliação e empresas. O objetivo do
            projeto foi redesenhar essa funcionalidade, aprimorando a
            experiência do usuário com base em feedbacks e versões anteriores.
            Trabalhei como a única designer, responsável por buscar requisitos,
            coletar dados e ferramentas necessárias, consultar documentos, e
            criar os entregáveis de design.
          </Paragraph>
        </div>
      </TwoCols>
      <CoverImg src={cover2} />
      <div>
        <Title>Desvendando a complexidade: o desafio do redesign do CVA</Title>
        <TwoCols>
          <Paragraph>
            O principal desafio deste projeto foi a complexidade inerente da
            ferramenta. Compreender o conceito, definir o fluxo de navegação e
            criar telas exigiu várias conversas e experimentações com protótipos
            de alta fidelidade. Realizei entrevistas detalhadas com stakeholders
            para coletar requisitos e entender profundamente as necessidades dos
            usuários.
          </Paragraph>
          <Paragraph>
            A primeira etapa envolveu essas entrevistas, seguida de um
            mapeamento de navegação e funcionalidades para compreender melhor o
            fluxo de informações e os usuários. A terceira etapa foi a de
            ideação e prototipação no Figma, com várias reuniões de revisão e
            tomada de decisão.
          </Paragraph>
        </TwoCols>
      </div>
      <CoverImg src={cover3} />
      <TwoCols>
        <div>
          <Title>Da complexidade à clareza: a transformação do CVA</Title>
          <Paragraph>
            O resultado foi um redesign que transformou a complexa ferramenta do
            CVA em uma experiência mais intuitiva e eficiente. As sessões de
            prototipação e revisão garantiram que cada funcionalidade fosse
            alinhada com as expectativas dos analistas especializados.
          </Paragraph>
        </div>
      </TwoCols>
      <CoverImg src={cover4} />
      <TwoCols>
        <div>
          <Title>Adaptação e colaboração: lições do design do CVA</Title>
          <Paragraph>
            A principal lição deste projeto foi a importância da adaptação
            contínua e da colaboração com os stakeholders. Cada etapa do
            processo de design, desde a coleta de requisitos até a prototipação,
            foi marcada por uma comunicação aberta e constante.
          </Paragraph>
        </div>
        <div>
          <Title>Evolução contínua: o futuro do CVA</Title>
          <Paragraph>
            O lançamento bem-sucedido da nova versão do CVA foi apenas o começo.
            Com base no feedback dos usuários, continuamos a fazer
            aprimoramentos e a implementar novas funcionalidades, proporcionando
            uma experiência cada vez mais rica. Este case demonstra como a
            combinação de design estratégico, foco no usuário e colaboração
            constante pode transformar uma ferramenta complexa em uma solução
            intuitiva e poderosa, atendendo tanto às necessidades dos usuários
            quanto aos objetivos de negócio.
          </Paragraph>
        </div>
      </TwoCols>
    </div>
    <Footer />
  </>
)

export default Cva

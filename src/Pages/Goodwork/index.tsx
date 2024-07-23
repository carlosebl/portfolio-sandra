import Footer from '../../Components/portuguese/Footer'
import ProjectIntro from '../../Components/portuguese/ProjectIntro'
import {
  Challenge,
  CoverImg,
  GoodworkSection,
  Paragraph,
  Title,
  TwoCols
} from './styles'

import cover1 from '../../assets/images/goodwork3.png'
import cover2 from '../../assets/images/goodwork5.png'
import cover3 from '../../assets/images/goodwork7.png'
import characters from '../../assets/images/goodwork4.png'
import fluxogram from '../../assets/images/goodwork6.png'
import { Chip, ChipsContainer } from '../../Components/Chips/styles'
import Header from '../../Components/portuguese/Header'

const Goodwork = () => (
  <>
    <div className="container">
      <Header />
      <ProjectIntro
        title={
          <p>
            Transformando a saúde mental no trabalho:
            <br />A jornada do GoodWork Valou
          </p>
        }
        description={
          'Imagine um aplicativo que não só ajuda indivíduos a gerenciarem sua saúde mental no trabalho, mas também permite que empresas monitorem e melhorem a cultura do ambiente corporativo. Essa foi a missão do GoodWork Valou, e transformar essa visão em realidade exigiu uma jornada repleta de desafios, colaboração intensa e muita criatividade.'
        }
        system={'App IOS e Android'}
        year={'2023/2024'}
        company={
          'Bridge Management Technologies® e empresas parceiras. (Site do projeto)'
        }
      />
      <CoverImg src={cover1} alt="Cover" />
      <ChipsContainer>
        <Chip>Design Strategy</Chip>
        <Chip>Results Oriented</Chip>
        <Chip>Design sessions</Chip>
        <Chip>Product design</Chip>
        <Chip>Ux Design</Chip>
        <Chip>Advanced English</Chip>
        <Chip>Figma</Chip>
        <Chip>Ui Design</Chip>
        <Chip>Mobile design</Chip>
        <Chip>Figjam</Chip>
        <Chip>SaaS</Chip>
        <Chip>B2C</Chip>
      </ChipsContainer>
      <TwoCols>
        <img src={characters} alt="Characters" />
        <div>
          <Title>De seis personagens a um propósito único</Title>
          <Paragraph>
            GoodWork Valou foi concebido para ser um aplicativo que ajuda as
            pessoas a avaliarem e melhorarem seu bem-estar mental no ambiente de
            trabalho. Com seis personagens representando diferentes áreas de
            valor na vida dos usuários, o app utiliza questionários para medir o
            humor e sentimentos diários, oferecendo sugestões personalizadas
            para melhorias. A ambição era criar uma ferramenta que não só
            coletasse dados, mas também motivasse os funcionários a interagirem
            ativamente, promovendo uma cultura de saúde mental positiva nas
            empresas.
          </Paragraph>
        </div>
      </TwoCols>
      <Challenge>
        <Title>O desafio de conquistar corações e mentes: lançando o MVP</Title>
        <div>
          <Paragraph>
            Desde o início, o maior desafio foi traduzir as dores dos usuários
            em funcionalidades fáceis de usar e atraentes. Precisávamos entender
            profundamente as dificuldades enfrentadas pelos funcionários no
            ambiente de trabalho e transformá-las em soluções práticas. Para
            isso, criei fluxogramas detalhados e um Job map, o que ajudou todos
            a visualizarem a jornada do usuário e o escopo do projeto de forma
            clara antes do desenho das telas.
          </Paragraph>
          <Paragraph>
            Além disso, criar um meio de campo eficiente entre stakeholders e
            desenvolvedores não foi fácil. Reuniões regulares e comunicação
            constante foram essenciais para transformar ideias abstratas em
            entregáveis concretos e escopos bem planejados.
          </Paragraph>
          <Paragraph>
            Encontrar uma proposta de valor que se adequasse tanto às dores dos
            usuários quanto aos objetivos de negócio foi uma tarefa desafiadora.
            Realizamos sessões de brainstorming com os stakeholders para
            identificar as prioridades mais impactantes. A partir daí,
            priorizamos as funcionalidades que proporcionariam o maior ganho em
            termos de satisfação dos usuários e retorno para as empresas,
            garantindo um produto final equilibrado e eficaz.
          </Paragraph>
        </div>
      </Challenge>
      <CoverImg src={cover2} alt="Cover" />
      <GoodworkSection>
        <div>
          <Title>Construindo pontes: do fluxograma ao lançamento</Title>
          <Paragraph>
            O processo começou com entrevistas detalhadas com os stakeholders
            para entender os requisitos e analisar a documentação inicial. A
            partir dessas conversas, desenvolvemos fluxogramas e um Job map para
            mapear as funcionalidades essenciais do aplicativo. Criei o style
            guide e protótipos de alta fidelidade e documentação, consultando
            regularmente o time de desenvolvedores e stakeholders para garantir
            que todos estivessem alinhados.
            <br />
            <br />
            Durante a implementação, ajustes constantes foram necessários, e a
            comunicação com a equipe foi crucial para resolver problemas e fazer
            melhorias rápidas. O trabalho intenso culminou no lançamento do MVP
            do Valou, com o foco em aumentar a interação dos usuários e fornecer
            dados valiosos para as empresas parceiras.
          </Paragraph>
        </div>
        <img src={fluxogram} alt="Fluxograma" />
      </GoodworkSection>
      <CoverImg src={cover3} alt="Cover" />
      <GoodworkSection>
        <div>
          <Title>Adaptação e alinhamento: as lições aprendidas</Title>
          <Paragraph>
            Uma das maiores lições desse projeto foi a importância da
            flexibilidade e da comunicação contínua. Adaptações rápidas e a
            capacidade de iterar com base no feedback foram essenciais para o
            sucesso do MVP. Além disso, o envolvimento direto com os
            stakeholders desde o início garantiu que as expectativas fossem
            alinhadas e que o produto final atendesse às necessidades tanto dos
            usuários quanto das empresas.
          </Paragraph>
        </div>
        <div>
          <Title>Além do MVP: O futuro do GoodWork Valou</Title>
          <Paragraph>
            O lançamento bem-sucedido do GoodWork Valou foi apenas o começo. A
            primeira versão do aplicativo estabeleceu uma base sólida para
            futuras melhorias e novas funcionalidades, destacando a importância
            de uma abordagem centrada no usuário e empática. O próximo passo é
            desenvolver uma versão que permita às empresas visualizarem os dados
            de seus funcionários, ampliando ainda mais o impacto positivo do
            projeto ao fornecer insights valiosos para a gestão empresarial.
            <br />
            <br />
            Este case é um exemplo de como a combinação de design estratégico e
            holístico, desenvolvimento ágil e colaboração constante pode
            transformar uma visão ambiciosa em uma ferramenta prática e eficaz
            para melhorar a saúde mental no ambiente de trabalho.
          </Paragraph>
        </div>
      </GoodworkSection>
      <Footer />
    </div>
  </>
)

export default Goodwork

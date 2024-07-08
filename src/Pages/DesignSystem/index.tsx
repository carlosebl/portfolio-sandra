import ProjectIntro from '../../Components/ProjectIntro'
import { CoverImg, Paragraph, Title, TwoCols } from '../Goodwork/styles'
import { Chip, ChipsContainer } from '../../Components/Chips/styles'

import cover1 from '../../assets/images/ds2.png'
import cover2 from '../../assets/images/ds3.png'
import img1 from '../../assets/images/ds4.png'
import Footer from '../../Components/Footer'

const DesignSystem = () => (
  <>
    <div className="container">
      <ProjectIntro />
      <CoverImg src={cover1} />
      <ChipsContainer>
        <Chip>Design Strategy</Chip>
        <Chip>Results sessions</Chip>
        <Chip>Design System</Chip>
        <Chip>Figma</Chip>
        <Chip>UI Design</Chip>
        <Chip>Figjam</Chip>
      </ChipsContainer>
      <TwoCols>
        <div>
          <Title>Construindo a base</Title>
          <Paragraph>
            O projeto do design system do Bridge One® visava modernizar a
            interface de usuário e garantir consistência visual em todas as
            telas da plataforma, que engloba funcionalidades de ideação e
            gerenciamento de tarefas. O objetivo era criar um sistema unificado
            onde todos os componentes existentes e novos fossem harmonizados
            para proporcionar uma experiência de usuário fluida e coerente.
          </Paragraph>
        </div>
      </TwoCols>
      <div>
        <Title>
          Buscando a simplicidade: inventário e arquitetura do design system
        </Title>
        <TwoCols>
          <Paragraph>
            Iniciou-se com a realização de um inventário completo dos
            componentes existentes, tanto a nível de design quanto de front-end,
            e transformá-los em um sistema coeso. O processo começou com um
            levantamento detalhado dos componentes, seguido por sessões de card
            sorting, alternando entre momentos individuais e em equipe para
            tomar decisões informadas.
          </Paragraph>
          <Paragraph>
            O maior desafio foi coletar e debater os componentes existentes a
            fim de decidir sobre melhorias e alterações. Nas reuniões,
            discutimos sobre a funcionalidade e a relevância de cada componente,
            o que demandava um equilíbrio delicado entre a opinião dos designers
            e a viabilidade técnica apontada pelos desenvolvedores. Durante
            essas sessões, o objetivo era garantir que cada decisão fosse
            orientada tanto para um código limpo quanto para a padronização
            baseada no Material Design.
          </Paragraph>
        </TwoCols>
      </div>
      <CoverImg src={cover2} />
      <TwoCols>
        <div>
          <Title>
            De componentes a coesão: a estruturação do design system
          </Title>
          <Paragraph>
            Após a fase de inventário e arquitetura, iniciamos a criação dos
            componentes, começando pelos mais simples e avançando gradualmente
            para os mais complexos. Dependendo da complexidade de cada
            componente, realizamos sessões de equipe para analisar alternativas
            e tomar decisões sobre seu funcionamento. Sempre nos focamos em
            manter um código limpo e uma interface padronizada.
            <br />
            <br />O resultado foi um design system bem estruturado no Figma,
            alinhado com o front-end, que continua sendo atualizado conforme
            novas descobertas. Essa estrutura não só modernizou a UI, mas também
            trouxe consistência e unidade visual para toda a plataforma Bridge
            One®.
          </Paragraph>
        </div>
        <img src={img1} alt="" />
      </TwoCols>
      <TwoCols>
        <div>
          <Title>Colaboração e flexibilidade: as lições aprendidas</Title>
          <Paragraph>
            A chave principal deste projeto foi a importância da colaboração
            contínua e da flexibilidade. As sessões de card sorting e as
            reuniões de equipe mostraram que a comunicação aberta entre
            designers e desenvolvedores é essencial para criar um sistema coeso.
            Além disso, a capacidade de adaptar e iterar rapidamente com base no
            feedback foi crucial para o sucesso do projeto.
          </Paragraph>
        </div>
        <div>
          <Title>
            A evolução contínua: o futuro do design system do Bridge One®
          </Title>
          <Paragraph>
            O lançamento do design system do Bridge One® foi apenas o começo. A
            estrutura sólida criada no Figma, alinhada com o front-end,
            estabeleceu uma base robusta para futuras melhorias e novos
            componentes. Este projeto exemplifica como a combinação de design
            estratégico, desenvolvimento ágil e colaboração constante pode
            transformar uma plataforma complexa em uma experiência de usuário
            unificada e eficiente.
          </Paragraph>
        </div>
      </TwoCols>
    </div>
    <Footer />
  </>
)

export default DesignSystem

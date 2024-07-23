import ProjectIntro from '../../Components/portuguese/ProjectIntro'
import { Chip, ChipsContainer } from '../../Components/Chips/styles'
import {
  Challenge,
  CoverImg,
  GoodworkSection,
  Paragraph,
  Title,
  TwoCols
} from '../Goodwork/styles'
import HeaderEnglish from '../../Components/english/HeaderEnglish'
import FooterEnglish from '../../Components/english/FooterEnglish'

import cover1 from '../../assets/images/goodwork3.png'
import cover2 from '../../assets/images/goodwork5.png'
import cover3 from '../../assets/images/goodwork7.png'
import characters from '../../assets/images/goodwork4.png'
import fluxogram from '../../assets/images/goodwork6.png'

const GoodworkEnglish = () => (
  <>
    <div className="container">
      <HeaderEnglish />
      <ProjectIntro
        title={
          <p>
            Transforming mental health at work:
            <br />
            The GoodWork Valou journey
          </p>
        }
        description={
          "Imagine an app that not only helps individuals manage their mental health at work, but also allows companies to monitor and improve corporate culture. This was GoodWork Valou's mission, and turning this vision into reality required a journey full of challenges, intense collaboration and a lot of creativity."
        }
        system={'App IOS and Android'}
        year={'2023/2024'}
        company={'Bridge Management Technologies® and partners.'}
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
          <Title>From six characters to a single purpose</Title>
          <Paragraph>
            GoodWork Valou was designed to be an app that helps people assess
            and improve their mental well-being in the workplace. With six
            characters representing different areas of value in users&#39;
            lives, the app uses questionnaires to measure daily mood and
            feelings, offering personalized suggestions for improvements. The
            ambition was to create a tool that not only collected data, but also
            motivated employees to actively interact, promoting a positive
            mental health culture in companies.
          </Paragraph>
        </div>
      </TwoCols>
      <Challenge>
        <Title>
          The challenge of winning hearts and minds: launching the MVP
        </Title>
        <div>
          <Paragraph>
            From the beginning, the biggest challenge was translating users&#39;
            pain points into easy-to-use and attractive features. We needed to
            deeply understand the difficulties faced by employees in the
            workplace and transform them into practical solutions. To do this, I
            created detailed flowcharts and a Job map, which helped everyone
            visualize the user journey and the scope of the project clearly
            before designing the screens.
          </Paragraph>
          <Paragraph>
            Furthermore, creating an efficient middle ground between
            stakeholders and developers was not easy. Regular meetings and
            constant communication were essential to transform abstract ideas
            into concrete deliverables and well-planned scopes.
          </Paragraph>
          <Paragraph>
            Finding a value proposition that suited both users&#39; pain and
            business objectives was a challenging task. We hold brainstorming
            sessions with stakeholders to identify the most impactful
            priorities. From there, we prioritized the features that would
            provide the greatest gain in terms of user satisfaction and return
            for companies, ensuring a balanced and effective final product.
          </Paragraph>
        </div>
      </Challenge>
      <CoverImg src={cover2} alt="Cover" />
      <GoodworkSection>
        <div>
          <Title>Building bridges: from flowchart to launch</Title>
          <Paragraph>
            The process began with in-depth interviews with stakeholders to
            understand requirements and review initial documentation. From these
            conversations, we developed flowcharts and a Job map to map the
            application&#39;s essential functionalities. I created the style
            guide and high-fidelity prototypes and documentation, regularly
            consulting with the team of developers and stakeholders to ensure
            everyone was aligned.
            <br />
            <br />
            During implementation, constant adjustments were necessary, and
            communication with the team was crucial to resolve issues and make
            quick improvements. The intense work culminated in the launch of
            Valou&#39;s MVP, with a focus on increasing user interaction and
            providing valuable data to partner companies.
          </Paragraph>
        </div>
        <img src={fluxogram} alt="Fluxograma" />
      </GoodworkSection>
      <CoverImg src={cover3} alt="Cover" />
      <GoodworkSection>
        <div>
          <Title>Adaptation and alignment: lessons learned</Title>
          <Paragraph>
            One of the biggest lessons from this project was the importance of
            flexibility and continuous communication. Quick adaptations and the
            ability to iterate based on feedback were essential to the MVP&#39;s
            success. Furthermore, direct engagement with stakeholders from the
            beginning ensured that expectations were aligned and that the final
            product met the needs of both users and companies.
          </Paragraph>
        </div>
        <div>
          <Title>Beyond MVP: The Future of GoodWork Valou</Title>
          <Paragraph>
            The successful launch of GoodWork Valou was just the beginning. The
            first version of the app laid a solid foundation for future
            improvements and new features, highlighting the importance of a
            user-centric and empathetic approach. The next step is to develop a
            version that allows companies to visualize their employee data,
            further expanding the positive impact of the project by providing
            valuable insights for business management.
            <br />
            <br />
            This case is an example of how the combination of strategic and
            holistic design, agile development and constant collaboration can
            transform an ambitious vision into a practical and effective tool
            for improving mental health in the workplace.
          </Paragraph>
        </div>
      </GoodworkSection>
      <FooterEnglish />
    </div>
  </>
)

export default GoodworkEnglish

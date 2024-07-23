import ProjectIntro from '../../Components/portuguese/ProjectIntro'
import { CoverImg, Paragraph, Title, TwoCols } from '../Goodwork/styles'
import { Chip, ChipsContainer } from '../../Components/Chips/styles'
import HeaderEnglish from '../../Components/english/HeaderEnglish'
import FooterEnglish from '../../Components/english/FooterEnglish'

import cover1 from '../../assets/images/ds2.png'
import cover2 from '../../assets/images/ds3.png'
import img1 from '../../assets/images/ds4.png'

const DesignSystemEnglish = () => (
  <>
    <div className="container">
      <HeaderEnglish />
      <ProjectIntro
        title={
          <p>
            Unifying Experiences: The Bridge One®
            <br />
            Design System Journey
          </p>
        }
        description={
          'Transforming a complex platform into a cohesive and visually pleasing experience, where each component harmoniously integrates with the next, was the mission of the Bridge One® design system project, a robust platform for business management. Achieving this visual and functional unification required a concentrated effort, intense collaboration and a meticulous approach.'
        }
        system={'Design system'}
        year={'2021/2023'}
        company={'Bridge Management Technologies®'}
      />
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
          <Title>Building the base</Title>
          <Paragraph>
            The Bridge One® design system project aimed to modernize the user
            interface and ensure visual consistency across all screens on the
            platform, which encompasses ideation and task management
            functionalities. The goal was to create a unified system where all
            existing and new components were harmonized to provide a fluid and
            coherent user experience.
          </Paragraph>
        </div>
      </TwoCols>
      <div>
        <Title>
          Striving for simplicity: design system inventory and architecture
        </Title>
        <TwoCols>
          <Paragraph>
            It began with carrying out a complete inventory of existing
            components, both at the design and front-end levels, and
            transforming them into a cohesive system. The process began with a
            detailed survey of the components, followed by card sorting
            sessions, alternating between individual and team moments to make
            informed decisions.
          </Paragraph>
          <Paragraph>
            The biggest challenge was collecting and discussing existing
            components in order to decide on improvements and changes. In
            meetings, we discussed the functionality and relevance of each
            component, which required a delicate balance between the
            designers&#39; opinion and the technical feasibility highlighted by
            the developers. During these sessions, the goal was to ensure that
            every decision was driven by both clean code and Material
            Design-based standardization.
          </Paragraph>
        </TwoCols>
      </div>
      <CoverImg src={cover2} />
      <TwoCols>
        <div>
          <Title>
            From components to cohesion: the structuring of the design system
          </Title>
          <Paragraph>
            After the inventory and architecture phase, we begin creating the
            components, starting with the simplest and gradually advancing to
            the more complex. Depending on the complexity of each component, we
            hold team sessions to analyze alternatives and make decisions about
            their operation. We always focus on maintaining clean code and a
            standardized interface.
            <br />
            <br />
            The result was a well-structured design system in Figma, aligned
            with the front-end, which continues to be updated according to new
            discoveries. This framework not only modernized the UI, but also
            brought consistency and visual unity to the entire Bridge One®
            platform.
          </Paragraph>
        </div>
        <img src={img1} alt="" />
      </TwoCols>
      <TwoCols>
        <div>
          <Title>Collaboration and flexibility: lessons learned</Title>
          <Paragraph>
            The key to this project was the importance of continuous
            collaboration and flexibility. The card sorting sessions and team
            meetings showed that open communication between designers and
            developers is essential for creating a cohesive system.
            Additionally, the ability to adapt and iterate quickly based on
            feedback was crucial to the project&#39;s success.
          </Paragraph>
        </div>
        <div>
          <Title>
            Continuous evolution: the future of the Bridge One® design system
          </Title>
          <Paragraph>
            The launch of the Bridge One® design system was just the beginning.
            The solid structure created in Figma, aligned with the front-end,
            established a robust foundation for future improvements and new
            components. This project exemplifies how the combination of
            strategic design, agile development and constant collaboration can
            transform a complex platform into a unified and efficient user
            experience.
          </Paragraph>
        </div>
      </TwoCols>
      <FooterEnglish />
    </div>
  </>
)

export default DesignSystemEnglish

import ProjectIntro from '../../Components/portuguese/ProjectIntro'
import { Chip, ChipsContainer } from '../../Components/Chips/styles'
import { CoverImg, Paragraph, Title, TwoCols } from '../Goodwork/styles'
import HeaderEnglish from '../../Components/english/HeaderEnglish'
import FooterEnglish from '../../Components/english/FooterEnglish'

import cover1 from '../../assets/images/cva2.png'
import cover2 from '../../assets/images/cva4.png'
import cover3 from '../../assets/images/cva5.png'
import cover4 from '../../assets/images/cva6.png'
import img2 from '../../assets/images/cva3.png'

const CvaEnglish = () => (
  <>
    <div className="container">
      <HeaderEnglish />
      <ProjectIntro
        title={
          <p>
            Searching for simplicity in market analysis:
            <br />
            the case of Customer Value Analysis
          </p>
        }
        description={
          'Transforming a complex tool into something intuitive and effective is a big challenge. In the Customer Value Analysis (CVA) redesign project by Bridge Management Technologies®, we used an old version and customer feedback as a basis. Our mission was to modernize and optimize functionality to meet the high expectations of specialized analysts using the methodology.'
        }
        system={'Web app desktop'}
        year={'2022/2023'}
        company={'Bridge Management Technologies®'}
      />
      <CoverImg src={cover1} />
      <ChipsContainer>
        <Chip>Design Strategy</Chip>
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
            Reinventing customer value assessment: the new face of CVA
          </Title>
          <Paragraph>
            Customer Value Analysis is a market analysis methodology that
            assigns scores to evaluation criteria and companies. The objective
            of the project was to redesign this functionality, improving the
            user experience based on feedback and previous versions. I worked as
            the sole designer, responsible for searching for requirements,
            collecting necessary data and tools, consulting documents, and
            creating design deliverables.
          </Paragraph>
        </div>
      </TwoCols>
      <CoverImg src={cover2} />
      <div>
        <Title>Unraveling complexity: the challenge of CVA redesign</Title>
        <TwoCols>
          <Paragraph>
            The main challenge of this project was the inherent complexity of
            the tool. Understanding the concept, defining the navigation flow
            and creating screens required several conversations and experiments
            with high-fidelity prototypes. Conducted in-depth interviews with
            stakeholders to collect requirements and deeply understand user
            needs.
          </Paragraph>
          <Paragraph>
            The first stage involved these interviews, followed by mapping
            navigation and functionalities to better understand the flow of
            information and users. The third stage was ideation and prototyping
            in Figma, with several review and decision-making meetings.
          </Paragraph>
        </TwoCols>
      </div>
      <CoverImg src={cover3} />
      <TwoCols>
        <div>
          <Title>From complexity to clarity: the CVA transformation</Title>
          <Paragraph>
            The result was a redesign that transformed the complex CVA tool into
            a more intuitive and efficient experience. Prototyping and review
            sessions ensured that each functionality was aligned with the
            expectations of the specialized analysts.
          </Paragraph>
        </div>
      </TwoCols>
      <CoverImg src={cover4} />
      <TwoCols>
        <div>
          <Title>Adaptation and collaboration: lessons from CVA design</Title>
          <Paragraph>
            The main lesson from this project was the importance of continuous
            adaptation and collaboration with stakeholders. Each step of the
            design process, from requirements gathering to prototyping, was
            marked by open and constant communication.
          </Paragraph>
        </div>
        <div>
          <Title>Continuous evolution: the future of CVA</Title>
          <Paragraph>
            The successful launch of the new version of CVA was just the
            beginning. Based on user feedback, we continue to make improvements
            and implement new features, providing an increasingly rich
            experience. This case demonstrates how the combination of strategic
            design, user focus and constant collaboration can transform a
            complex tool into an intuitive and powerful solution, meeting both
            user needs and business objectives.
          </Paragraph>
        </div>
      </TwoCols>
      <FooterEnglish />
    </div>
  </>
)

export default CvaEnglish

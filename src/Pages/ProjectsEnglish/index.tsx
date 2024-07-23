import { Link } from 'react-router-dom'
import goodwork from '../../assets/images/goodwork2.png'
import cva from '../../assets/images/cva7.png'
import ds from '../../assets/images/ds5.png'
import HeaderEnglish from '../../Components/english/HeaderEnglish'
import FooterEnglish from '../../Components/english/FooterEnglish'
import ProjectEnglish from '../../Components/english/ProjectEnglish'

const ProjectsEnglish = () => (
  <>
    <div className="container">
      <HeaderEnglish />
      <ProjectEnglish
        img={goodwork}
        title={
          <Link to={'/goodwork_english'}>
            <p>
              Transforming mental health at work:
              <br />
              The GoodWork Valou journey
            </p>
          </Link>
        }
        system={'App IOS e Android'}
        year={'2023/2024'}
        company={'Bridge Management Technologies® and partners.'}
        background={'yellow'}
      />
      <ProjectEnglish
        img={cva}
        title={
          <Link to={'/cva_english'}>
            <p>
              Searching for simplicity in market analysis: the case of Customer
              Value Analysis
            </p>
          </Link>
        }
        system={'Web app desktop'}
        year={'2022/2023'}
        company={'Bridge Management Technologies®'}
        background={'blue'}
      />
      <ProjectEnglish
        img={ds}
        title={
          <Link to={'/design-system_english'}>
            <p>Unifying Experiences: The Bridge One® Design System Journey</p>
          </Link>
        }
        system={'Design System'}
        year={'2021/2022'}
        company={'Bridge Management Technologies®'}
        background={'yellow'}
      />
      <FooterEnglish />
    </div>
  </>
)

export default ProjectsEnglish

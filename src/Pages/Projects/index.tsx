import { Link } from 'react-router-dom'
import Footer from '../../Components/portuguese/Footer'
import Project from '../../Components/portuguese/Project'

import goodwork from '../../assets/images/goodwork2.png'
import cva from '../../assets/images/cva7.png'
import ds from '../../assets/images/ds5.png'
import Header from '../../Components/portuguese/Header'

const Projects = () => (
  <>
    <div className="container">
      <Header />
      <Project
        img={goodwork}
        title={
          <Link to={'/goodwork'}>
            <p>
              Transformando a saúde mental no trabalho:
              <br />A jornada do GoodWork Valou
            </p>
          </Link>
        }
        system={'App IOS e Android'}
        year={'2023/2024'}
        company={'Bridge Management Technologies® e empresas parceiras.'}
        background={'yellow'}
      />
      <Project
        img={cva}
        title={
          <Link to={'/cva'}>
            <p>
              Buscando simplicidade na análise de mercado:
              <br />o caso do Customer Value Analysis
            </p>
          </Link>
        }
        system={'Web app desktop'}
        year={'2022/2023'}
        company={'Bridge Management Technologies®'}
        background={'blue'}
      />
      <Project
        img={ds}
        title={
          <Link to={'/design-system'}>
            <p>
              Unificando experiências: a jornada do design
              <br />
              system do Bridge One®
            </p>
          </Link>
        }
        system={'Design System'}
        year={'2021/2022'}
        company={'Bridge Management Technologies®'}
        background={'yellow'}
      />
      <Footer />
    </div>
  </>
)

export default Projects

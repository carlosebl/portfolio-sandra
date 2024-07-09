import Footer from '../../Components/Footer'
import Project from '../../Components/Project'

import goodwork from '../../assets/images/goodwork2.png'
import cva from '../../assets/images/cva7.png'
import ds from '../../assets/images/ds5.png'
import blank from '../../assets/images/blank.png'

const Projects = () => (
  <>
    <div className="container">
      <Project
        img={goodwork}
        title={
          <p>
            Transformando a saúde mental no trabalho:
            <br />A jornada do GoodWork Valou
          </p>
        }
        system={'App IOS e Android'}
        year={'2023/2024'}
        company={
          'Bridge Management Technologies® e empresas parceiras. (Site do projeto)'
        }
        background={'yellow'}
      />
      <Project
        img={cva}
        title={
          <p>
            Buscando simplicidade na análise de mercado:
            <br />o caso do Customer Value Analysis
          </p>
        }
        system={'Web app desktop'}
        year={'2022/2023'}
        company={'Bridge Management Technologies®'}
        background={'blue'}
      />
      <Project
        img={ds}
        title={
          <p>
            Unificando experiências: a jornada do design
            <br />
            system do Bridge One®
          </p>
        }
        system={'Design System'}
        year={'2021/2022'}
        company={'Bridge Management Technologies®'}
        background={'yellow'}
      />
      <Project
        img={blank}
        title={
          <p>
            Desbravando o futuro das máquinas agrícolas:
            <br />o design do sistema de desenvolvimento de
            <br />
            produtos Rech
          </p>
        }
        system={'Web app desktop'}
        year={'2021'}
        company={'CWI Software e Rech'}
        background={'blue'}
      />
      <Project
        img={blank}
        title={
          <p>
            Redesign do NSC Total: uma jornada rumo à<br />
            experiência do usuário ideal
          </p>
        }
        system={'Portal de notícias'}
        year={'2021'}
        company={'CWI Software e Grupo NSC'}
        background={'yellow'}
      />
    </div>
    <Footer />
  </>
)

export default Projects

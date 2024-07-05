import {
  ProjecIntroContainer,
  ProjectIntroCompany,
  ProjectIntroInfo
} from './styles'

const ProjectIntro = () => (
  <ProjecIntroContainer>
    <h3>
      Transformando a saúde mental no trabalho:
      <br />A jornada do GoodWork Valou
    </h3>
    <ProjectIntroInfo>
      <p>
        Imagine um aplicativo que não só ajuda indivíduos a gerenciarem sua
        saúde mental no trabalho, mas também permite que empresas monitorem e
        melhorem a cultura do ambiente corporativo. Essa foi a missão do
        GoodWork Valou, e transformar essa visão em realidade exigiu uma jornada
        repleta de desafios, colaboração intensa e muita criatividade.
      </p>
      <ProjectIntroCompany>
        <div>
          <h4>TIPO</h4>
          <p>App IOS e Android</p>
        </div>
        <div>
          <h4>Ano</h4>
          <p>2023/2024</p>
        </div>
        <div>
          <h4>EMPRESA</h4>
          <p>
            Bridge Management Technologies® e<br />
            empresas parceiras. (Site do projeto)
          </p>
        </div>
      </ProjectIntroCompany>
    </ProjectIntroInfo>
  </ProjecIntroContainer>
)

export default ProjectIntro

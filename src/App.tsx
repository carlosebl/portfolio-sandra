import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles'

import Header from './Components/Header'
import PageRoutes from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <div className="container">
          <Header />
        </div>
        <PageRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

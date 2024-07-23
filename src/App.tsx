import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles'

import Header from './Components/portuguese/Header'
import PageRoutes from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <PageRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

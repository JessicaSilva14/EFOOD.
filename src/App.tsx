import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global' // Mudado de GlobalCss para GlobalStyle
import { AppRoutes } from './routes' 

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle /> {/* Ajustado aqui também */}
      <AppRoutes /> 
    </BrowserRouter>
  )
}

export default App
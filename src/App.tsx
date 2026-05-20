import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles/global'
import { AppRoutes } from './routes' 

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <AppRoutes /> 
    </BrowserRouter>
  )
}

export default App
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles/global'
import { AppRoutes } from './routes' // Importando o nome exato do seu arquivo!

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <AppRoutes /> {/* Chamando o seu componente de rotas correto */}
    </BrowserRouter>
  )
}

export default App
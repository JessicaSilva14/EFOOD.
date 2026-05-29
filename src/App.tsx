import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' // Importa o Provider
import { store } from './store' // Importa a store que criamos

import { GlobalStyle } from './styles/global' 
import { AppRoutes } from './routes' 

function App() {
  return (
    <Provider store={store}> {/* O Provider precisa envolver TUDO para o Redux funcionar */}
      <BrowserRouter>
        <GlobalStyle /> 
        <AppRoutes /> 
      </BrowserRouter>
    </Provider>
  )
}

export default App
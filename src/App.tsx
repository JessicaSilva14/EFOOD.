import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
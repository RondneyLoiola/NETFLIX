import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/globalStyles'
import Home from './Containers/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Home/>
  </StrictMode>,
)

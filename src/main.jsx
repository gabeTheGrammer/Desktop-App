import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import TitleBar from './component/TitleBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleBar />
    <App />
    
  </StrictMode>,
)

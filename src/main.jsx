import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import TitleBar from './component/TitleBar.jsx'
import GlisteningBackground from './component/GlisteningBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='transition-colors duration-1000 h-screen bg-[var(--bg-color)]'>
      <GlisteningBackground />
      <TitleBar />
      <App />
    </div>
    
    
  </StrictMode>,
)

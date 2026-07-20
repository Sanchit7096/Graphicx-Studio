import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DocumentHead from './components/layout/DocumentHead.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DocumentHead />
    <App />
  </StrictMode>,
)

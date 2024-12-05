import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jalankan from './SAS2425/sas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jalankan />
  </StrictMode>,
)

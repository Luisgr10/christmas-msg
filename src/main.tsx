import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Christmas from './Christmas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Christmas />
  </StrictMode>,
)

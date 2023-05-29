import React from 'react'
import ReactDOM from 'react-dom/client'
import GreenHouseApp from './GreenHouseApp.tsx'
import { GlossaryProvider } from './context/glossary/GlossaryProvider.tsx'
import './styles/index.css';
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlossaryProvider>
      <GreenHouseApp />
    </GlossaryProvider>
  </React.StrictMode>,
)

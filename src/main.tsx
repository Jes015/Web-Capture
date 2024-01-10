import '@fontsource/roboto'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const entryPoint = document.getElementById('root')
const root = createRoot(entryPoint as Element)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

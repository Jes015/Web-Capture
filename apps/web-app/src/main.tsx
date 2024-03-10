import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const entryPoint = document.getElementById('root')
const root = createRoot(entryPoint as Element)
root.render(
  <App />
)

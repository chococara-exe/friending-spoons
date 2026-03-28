import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Tab from './components/Tab.js'
import CatalogItem from './components/CatalogItem.tsx'
import dudePNG from './assets/image.png'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tab />
    <CatalogItem title="Friend" name="Hello" age={23} image={dudePNG} tags={["yellow", "red"]}/>
  </StrictMode>,
)

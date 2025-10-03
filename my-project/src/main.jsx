import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Service from './Service.jsx'
import Shop from './Shop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Service /> */}
    {/* <Shop /> */}
  </StrictMode>
)

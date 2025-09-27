// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//    <App />
//   </BrowserRouter>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './context_API/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <Usercontext>
       <App />
  </Usercontext>

 
)
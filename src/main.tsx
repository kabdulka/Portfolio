import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LogRocket from 'logrocket';


LogRocket.init('2wr3t8/portfolio');
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

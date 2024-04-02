import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContex from "./utils/UserContex.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
<UserContex>
    <App />
  </UserContex>
)

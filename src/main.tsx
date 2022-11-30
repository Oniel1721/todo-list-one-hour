import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoProvider } from './context'
import './styles/normalize.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)




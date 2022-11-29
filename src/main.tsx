import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/*
Un Todo List. Pero, colaborativo, que las personas puedan comentar sobre el "TODO" de otra persona SOLO SI estan en el mismo grupo de trabajo. Funcionalidades: Agregar, comentar, eliminar (SOLO SI EL DUEÑO DEJA) y un search. 
(Completar Reto a gusto y necesidad)
*/


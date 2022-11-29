
import { useContext, useState } from 'react'
import './App.css'
import { AddForm } from './components/AddForm'
import { TodoList } from './components/TodoList'
import { TodoContext } from './context'
import { useTodos } from './hooks/useTodos'

function App() {

  const [search, setSearch] = useState('')
  const [workspace, setWorkspace] = useState('')

  return (
    <div className="App">
      <AddForm />
      {/* <label>Search</label>
      <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" /> */}
      <TodoList />
      {/* <ul>
        {
          todoHook.workspaces.map((name) => <li key={name} onClick={() => setWorkspace(name)}>{name}</li>)
        }
      </ul> */}
    </div>
  )
}

export default App

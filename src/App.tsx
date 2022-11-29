
import { useState } from 'react'
import './App.css'
import { AddForm } from './components/AddForm'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'

function App() {

  const [search, setSearch] = useState('')
  const [workspace, setWorkspace] = useState('')
  const todoHook = useTodos({ search, workspaceSelected: workspace })

  return (
    <div className="App">
      <AddForm addTodo={todoHook.addTodo} />
      <label>Search</label>
      <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" />
      <TodoList addComment={todoHook.addComment} deleteTodo={todoHook.deleteTodo} todos={todoHook.todos} />
      <ul>
        {
          todoHook.workspaces.map((name) => <li key={name} onClick={() => setWorkspace(name)}>{name}</li>)
        }
      </ul>
    </div>
  )
}

export default App

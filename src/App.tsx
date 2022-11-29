
import { AddForm, SearchInput, TodoList } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <AddForm />
      <SearchInput />
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

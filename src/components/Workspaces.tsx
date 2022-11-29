import { useContext } from "react"
import { TodoContext } from "../context"

export const Workspaces = () => {
    const { workspaces, setWorkspace } = useContext(TodoContext)
    return <ul>
        {
            workspaces.map((name) => <li key={name} onClick={() => setWorkspace(name)}>{name}</li>)
        }
    </ul>
}
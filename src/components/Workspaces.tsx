import { useCallback, useContext } from "react"
import { TodoContext } from "../context"

export const Workspaces = () => {
    const { workspaces, setWorkspace, workspace } = useContext(TodoContext)

    const handleSelect = useCallback((value: string) => {
        setWorkspace(value)
    }, [])

    return <section className="workspaces-container">
        <h2 className="workspaces-title">Espacios de trabajo</h2>
        <select
            className="workspace-select"
            value={workspace}
            onChange={(e) => handleSelect(e.target.value)}
        >
            <option
                className="workspace-option"
                value={''}>
                Todos
            </option>
            {
                workspaces.map((name) => (
                    <option
                        className="workspace-option"
                        value={name}
                        key={name}>{name}
                    </option>
                ))
            }
        </select>
    </section>
}
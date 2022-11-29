import { useMemo, useState } from "react"
import { Todo, TodoWorkspace } from "../context"

export const useTodosFiltered = (todos: Todo[]) => {
    const [search, setSearch] = useState('')
    const [workspace, setWorkspace] = useState<TodoWorkspace>('')

    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            return todo.title.toLowerCase().includes(search.toLowerCase()) && todo.workspace.includes(workspace)
        })
    }, [search, workspace, todos])

    return {
        todos: filteredTodos,
        search,
        setSearch,
        workspace,
        setWorkspace
    }
}
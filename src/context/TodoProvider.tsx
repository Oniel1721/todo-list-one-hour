import { useMemo } from "react"
import { useTodos, useTodosFiltered } from "../hooks"
import { TodoContext } from "./TodoContext"

export const TodoProvider = ({ children }: any) => {

    const todoService = useTodos()
    const todosFiltered = useTodosFiltered(todoService.todos)
    const workspaces = useMemo(() => {
        return [...new Set(todoService.todos.map((todo) => todo.workspace))]
    }, [todoService.todos])

    return <TodoContext.Provider
        value={{
            ...todoService,
            ...todosFiltered,
            workspaces
        }}
    >
        {children}
    </TodoContext.Provider>
}
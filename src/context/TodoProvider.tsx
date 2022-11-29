import { useCallback, useMemo } from "react"
import { useTodos, useTodosFiltered } from "../hooks"
import { TodoContext } from "./TodoContext"
import { Todo } from "./types"

export const TodoProvider = ({ children }: any) => {

    const todoService = useTodos()
    const todosFiltered = useTodosFiltered(todoService.todos)
    const workspaces = useMemo(() => {
        return [...new Set(todoService.todos.map((todo) => todo.workspace))]
    }, [todoService.todos])

    const toggleDone = useCallback((todo: Todo) => {
        todoService.editTodo(todo.id, { done: !todo.done })
    }, [])

    return <TodoContext.Provider
        value={{
            ...todoService,
            ...todosFiltered,
            workspaces,
            toggleDone
        }}
    >
        {children}
    </TodoContext.Provider>
}
import { useTodos, useTodosFiltered } from "../hooks"
import { TodoContext } from "./TodoContext"

export const TodoProvider = ({ children }: any) => {

    const todoService = useTodos()
    const todosFiltered = useTodosFiltered(todoService.todos)

    return <TodoContext.Provider
        value={{
            ...todoService,
            ...todosFiltered
        }}
    >
        {children}
    </TodoContext.Provider>
}
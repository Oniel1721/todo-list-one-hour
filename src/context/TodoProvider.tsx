import { useTodos } from "../hooks/useTodos"
import { TodoContext } from "./TodoContext"

export const TodoProvider = ({ children }: any) => {
    const todoHook = useTodos()

    return <TodoContext.Provider
        value={todoHook}
    >
        {children}
    </TodoContext.Provider>
}
import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoCard } from "./TodoCard"


export const TodoList = () => {
    const { todos } = useContext(TodoContext)
    return <ul>
        {
            todos.map((todo, i) => {
                return <TodoCard todo={todo} key={i} />
            })
        }
    </ul>
}
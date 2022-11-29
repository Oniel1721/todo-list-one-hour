import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoCard } from "./TodoCard"


export const TodoList = () => {
    const { todos, workspace } = useContext(TodoContext)
    return <section className="todos-container">
        <h2 className="todos-title">{workspace || 'Todas las tareas'}</h2>
        <ul className="todos-list">
            {
                todos.map((todo, i) => {
                    return <TodoCard todo={todo} key={i} />
                })
            }
        </ul>
    </section>

}
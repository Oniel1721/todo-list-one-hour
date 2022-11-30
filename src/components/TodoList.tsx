import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoCard } from "./TodoCard"


export const TodoList = () => {
    const { todos, workspace } = useContext(TodoContext)
    return <section className="todos-container">
        <h2 className="todos-title">{
            workspace ? `Tareas de ${workspace}` : `Todas las tareas`
        }</h2>
        <ul className="todos-list">
            {
                todos.length
                    ? todos.map((todo, i) => {
                        return <TodoCard todo={todo} key={i} />
                    })
                    : <h3 className="no-todos">No hay tareas</h3>
            }
        </ul>
    </section>

}
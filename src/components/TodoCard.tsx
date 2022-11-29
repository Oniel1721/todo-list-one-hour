import { useContext, useState } from "react"
import { Todo, TodoContext } from "../context"


interface Props {
    todo: Todo,
}

export const TodoCard = ({ todo }: Props) => {
    const { addCommentOnTodo, deleteTodo, toggleDone } = useContext(TodoContext)
    const [value, setValue] = useState('')
    return <li className="todo-card">
        <label>
            <input
                onChange={() => toggleDone(todo)}
                checked={todo.done}
                className="todo-card-check"
                type="checkbox"
            />
            <i />
            <h3 className="todo-card-title">{todo.title}</h3>
        </label>
        {/* <input value={value} onChange={(e) => setValue(e.target.value)} type={'text'} />

        <button onClick={() => addCommentOnTodo(todo.id, value)}>Comentar</button>
        {todo.canDelete && <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>}

        <ul>
            {todo.comments.map((comment) => <li>{comment}</li>)}
        </ul> */}
    </li>
}
import { useContext, useState } from "react"
import { Todo, TodoContext } from "../context"


interface Props {
    todo: Todo,
}

export const TodoCard = ({ todo }: Props) => {
    const { addCommentOnTodo, deleteTodo } = useContext(TodoContext)
    const [value, setValue] = useState('')
    return <>
        <li >
            {todo.title}
            <input value={value} onChange={(e) => setValue(e.target.value)} type={'text'} />
            <button onClick={() => addCommentOnTodo(todo.id, value)}>Comentar</button>
            {todo.canDelete && <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>}

        </li>
        <ul>
            {todo.comments.map((comment) => <li>{comment}</li>)}
        </ul>
    </>
}
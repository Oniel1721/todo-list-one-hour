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
        <div className="add-comment">
            <input
                required
                placeholder="Comment"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={'text'}
                className='add-comment-input'
            />
            <button
                className="add-comment-btn"
                onClick={() => { addCommentOnTodo(todo.id, value); setValue('') }}>
                Comentar
            </button>
        </div>
        <footer className="comments">
            {todo.comments.map((comment) =>
                (<p className="comment">{comment}</p>)
            )}
        </footer>
        {todo.canDelete &&
            <button
                className="delete-comment-btn"
                onClick={() => deleteTodo(todo.id)}>Eliminar</button>
        }
    </li >
}
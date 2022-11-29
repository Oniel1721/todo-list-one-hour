import { useState } from "react"
import { Todo as TodoType } from "../hooks/useTodos"

interface Props {
    todo: TodoType,
    deleteTodo: (i: number) => void,
    i: number,
    addComment: (comment: string, i: number) => void

}

export const Todo = ({ todo: { title, canDelete, comments }, deleteTodo, i, addComment }: Props) => {
    const [value, setValue] = useState('')
    return <>
        <li >
            {title}
            <input value={value} onChange={(e) => setValue(e.target.value)} type={'text'} />
            <button onClick={() => addComment(value, i)}>Comentar</button>
            {canDelete && <button onClick={() => deleteTodo(i)}>Eliminar</button>}

        </li>
        <ul>
            {comments.map((comment) => <li>{comment}</li>)}
        </ul>
    </>
}
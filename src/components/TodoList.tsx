import { Todo as TodoType } from "../hooks/useTodos"
import { Todo } from "./Todo"

interface Props {
    todos: TodoType[],
    deleteTodo: (i: string) => void,
    addComment: (comment: string, i: number) => void
}

export const TodoList = ({ todos, deleteTodo, addComment }: Props) => {
    return <ul>
        {
            todos.map((todo, i) => {
                return <Todo addComment={addComment} todo={todo} deleteTodo={deleteTodo} i={i} key={i} />
            })
        }
    </ul>
}
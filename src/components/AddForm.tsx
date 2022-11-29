import { useCallback, useContext } from "react"
import { TodoContext, TodoId, TodoWorkspace, Todo } from "../context"

export const AddForm = () => {

    const { addTodo } = useContext(TodoContext)

    const getTodoFromForm = useCallback((form: HTMLFormElement): Todo => {
        const formData = new FormData(form)
        const title = formData.get('title') as string
        const workspace = formData.get('workspace') as TodoWorkspace
        const canDelete = !!formData.get('canDelete')
        const id = Date.now().toString() as TodoId
        return { title, workspace, canDelete, id, comments: [], done: false }
    }, [])

    const onSumbit = useCallback((e: any) => {
        e.preventDefault()
        const todo = getTodoFromForm(e.target)
        addTodo(todo)
    }, [])


    return <form onSubmit={onSumbit}>
        <h3 >Crea un todo</h3>
        <label>Titulo</label>
        <input name="title" type="text" />
        <label>Espacio de trabajo</label>
        <input name="workspace" type="text" />
        <label>Se puede eliminar</label>
        <input name="canDelete" type="checkbox" />
        <button type="submit">Crear</button>
    </form>
}
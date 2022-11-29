import { Todo, useTodos } from "../hooks/useTodos"

interface Props {
    addTodo: (todo: Todo) => void
}

export const AddForm = ({ addTodo }: Props) => {

    const onSumbit = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const title = formData.get('title')!
        const workspace = formData.get('workspace')
        const canDelete = !!formData.get('canDelete')
        addTodo({ title, workspace, canDelete, state: 'todo', comments: [] } as any)
    }

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
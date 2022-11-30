import { useCallback, useContext, useState } from "react"
import { TodoContext, TodoId, TodoWorkspace, Todo } from "../context"
import { FormInput } from "./FormInput"

export const AddForm = () => {

    const { addTodo } = useContext(TodoContext)
    const [isFormActive, setIsFormActive] = useState(false)

    const getTodoFromForm = useCallback((form: HTMLFormElement): Todo => {
        const formData = new FormData(form)
        const title = formData.get('title') as string
        const workspace = formData.get('workspace') as TodoWorkspace
        const canDelete = !!formData.get('canDelete')
        const id = Date.now().toString() as TodoId
        return { title, workspace, canDelete, id, comments: [], done: false }
    }, [])

    const toggleFormActive = useCallback(() => {
        setIsFormActive((prev) => !prev)
        const buttonReset = document.querySelector('input[type="reset"]') as any
        buttonReset.click()
    }, [])

    const onSumbit = useCallback((e: any) => {
        e.preventDefault()
        const todo = getTodoFromForm(e.target)
        toggleFormActive()
        addTodo(todo)
    }, [])


    return <>
        <div onClick={toggleFormActive} className={`modal-bg ${isFormActive ? 'active' : ''}`} />
        <form
            className={`add-form ${isFormActive ? 'active' : ''}`}
            onSubmit={onSumbit}
        >
            <h3 className="add-title">Crea una tarea</h3>
            <FormInput
                label="Título"
                name="title"
                type="text"
            />
            <FormInput
                label="Espacio de trabajo"
                name="workspace"
                type="text"
            />
            <div className="input-box can-delete-box">
                <input id="canDelete" name="canDelete" type="checkbox" />
                <i />
                <label htmlFor="canDelete">Se podrá eliminar?</label>
            </div>
            <input style={{ display: 'none' }} type="reset" />
            <button className="add-todo-btn" type="submit">Crear</button>
        </form>
        <button
            className={`active-form-btn ${isFormActive ? 'active' : ''}`}
            onClick={toggleFormActive}
        />
    </>
}
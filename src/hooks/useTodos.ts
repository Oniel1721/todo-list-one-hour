import { useCallback, useEffect, useState } from "react";
import { todoLocalStorageService } from '../services'
import type { Todo, TodoService, TodoComment } from '../context'

export const useTodos = (): TodoService => {
    const [todos, setTodos] = useState<Todo[]>([])

    const updateState = useCallback(() => {
        setTodos(todoLocalStorageService.getLocalStorageTodos())
    }, [])


    const addTodo = useCallback((todo: Todo) => {
        todoLocalStorageService.addTodo(todo) && updateState()
    }, [])

    const deleteTodo = useCallback((id: string) => {
        todoLocalStorageService.deleteTodo(id) && updateState()
    }, [])

    const editTodo = useCallback((id: string, todo: Partial<Todo>) => {
        todoLocalStorageService.editTodo(id, todo) && updateState()
    }, [])

    const addCommentOnTodo = useCallback((id: string, comment: TodoComment) => {
        todoLocalStorageService.addCommentOnTodo(id, comment) && updateState()
    }, [])

    useEffect(() => {
        updateState()
    }, [])

    return {
        todos,
        addTodo,
        addCommentOnTodo,
        deleteTodo,
        editTodo
    }
}
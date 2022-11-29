import { useEffect, useState } from "react";

export interface Todo {
    title: string;
    workspace: string;
    canDelete: boolean;
    state: 'todo' | 'doing' | 'done';
    comments: string[]
}

interface Props {
    search: string,
    workspaceSelected: string
}


export const useTodos = ({ search, workspaceSelected }: Props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const todosSelected = workspaceSelected
        ? todos.filter(({ workspace }) => workspace === workspaceSelected)
        : todos
    const filteredTodos = todosSelected.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
    const workspaces = [...new Set(todos.map(({ workspace }) => workspace))]
    const getTodos = () => {
        return JSON.parse(localStorage.getItem('todos') ?? '[]') as Todo[]
    }

    const deleteTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => index !== i)
        localStorage.setItem('todos', JSON.stringify(newTodos))
        updateState()
    }

    const updateState = () => {
        const todos = getTodos()
        setTodos(todos)
    }

    const addTodo = (todo: Todo) => {
        const newTodos = [...todos, todo]
        localStorage.setItem('todos', JSON.stringify(newTodos))
        updateState()
    }

    const addComment = (comment: string, i: number) => {
        todos[i].comments.push(comment)
        localStorage.setItem('todos', JSON.stringify(todos))
        updateState()
    }

    useEffect(() => {
        updateState()
    }, [])

    return {
        todos: filteredTodos,
        addTodo,
        deleteTodo,
        workspaces,
        addComment
    }
}
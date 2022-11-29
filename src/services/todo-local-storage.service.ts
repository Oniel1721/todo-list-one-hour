import { localStorageService } from './'
import type { Todo, TodoService } from '../context'

class TodoLocalStorageService implements TodoService {
    todos: Todo[] = []
    readonly localStorageKey = 'todos'

    constructor() {
        this.todos = this.getLocalStorageTodos()
    }

    addCommentOnTodo(id: string, comment: string) {
        const i = this.todos.findIndex((todo) => todo.id === id)
        if (i < 0) return false;
        this.todos[i].comments.push(comment)
        return this.setLocalStorageTodos()
    }

    editTodo(id: string, newValues: Partial<Todo>): boolean {
        const i = this.todos.findIndex((todo) => todo.id === id)
        if (i < 0) return false;
        this.todos[i] = {
            ...this.todos[i],
            ...newValues,
            id
        }
        return this.setLocalStorageTodos()
    }

    deleteTodo(id: string) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
        return this.setLocalStorageTodos()
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
        return this.setLocalStorageTodos()
    }

    setLocalStorageTodos() {
        return localStorageService.set(this.localStorageKey, this.todos)
    }

    getLocalStorageTodos(): Todo[] {
        return localStorageService.get<Todo[]>(this.localStorageKey) ?? []
    }
}

export const todoLocalStorageService = new TodoLocalStorageService()
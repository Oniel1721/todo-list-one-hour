export type TodoId = string;
export type TodoComment = string;
export type TodoWorkspace = string;


export interface Todo {
    id: TodoId;
    title: string;
    workspace: TodoWorkspace;
    canDelete: boolean;
    done: boolean;
    comments: TodoComment[]
}

export interface TodoService {
    todos: Todo[],
    deleteTodo: (id: TodoId) => void,
    addTodo: (todo: Todo) => void,
    addCommentOnTodo: (id: string, comment: TodoComment) => void,
    editTodo: (id: TodoId, todo: Partial<Todo>) => void,
}

export type TodoContextState = TodoService & {
    search: string;
    setSearch: (value: string) => void;
    workspace: TodoWorkspace;
    setWorkspace: (value: TodoWorkspace) => void;
    workspaces: TodoWorkspace[];
    toggleDone: (todo: Todo) => void
}

export interface ITodo {
    id?: number,
    description?: string,
    status?: string,
    username?: string,
    targetDate?: any,
}

export interface ITodos {
    todos?: ITodo[]
}
import {useEffect, useState} from "react";
import type {ITodo} from "../../models/TodoModel.ts";
import {loadTodos} from "../../service/api.service.ts";
import {Todo} from "../todo-component/TodoComponent.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, []);



    return (
        <div>
            {
                todos.map(todo=><Todo todo ={todo} key = {todo.id}/>)
            }
        </div>
    )
}
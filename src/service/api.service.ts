import type {ITodo} from "../models/TodoModel.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';

export const  loadTodos = async ()=>{
    const responce:ITodo[] = await fetch(endpointTodos)
    .then(value => value.json())

    return responce;
}




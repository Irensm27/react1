import type {FC} from "react";
import type {ITodo} from "../../models/TodoModel.ts";

type TodoProps = {
    todo: ITodo
}
export const Todo:FC<TodoProps> = ({todo:{title, id, userId, completed}}) =>{
    return (
        <div>
            {id} {title} {userId} {completed.toString()}
        </div>
    )
}
import type {FC} from "react";
import type {ICommentModel} from "../../models/CommentModel.ts";

export interface ICommentProps {
    comment: ICommentModel;
}
export const CommentComponent: FC<ICommentProps> = ({comment: id, name, email,body}) => {
    return
    {
        <div>
            <h2>{id}</h2>


        </div>
    }
}
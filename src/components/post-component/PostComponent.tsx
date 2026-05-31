import type {IPostModel} from "../../models/PostModel.ts";
import type {FC} from "react";


interface IPostProps {
    post: IPostModel
}
export const PostComponent:FC<IPostProps> = ({post:{id, title, body, tags, reactions, views, userId}}) =>{

    return (
        <div className="p-4 border rounded-xl mb-3">
            <p className="font-bold">{id}. {title}</p>
            <p>{body}</p>
            <div>
                {tags.map(tag => (
                    <span key={tag}>#{tag} </span>
                ))}
            </div>
            <div>
                👍 {reactions.likes} | 👎 {reactions.dislikes}
            </div>
            <div>
                👁 {views} | user: {userId}
            </div>
        </div>
    );
};



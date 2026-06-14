import type {IPostJsonPlaceholder} from "../../../models/jsonplaceholder/JsonPlaceholderPostsModel..ts";
import type {FC} from "react";

type JsonPostsPropType = {
    post:IPostJsonPlaceholder;
}
const JsonPlaceholderPostComponent:FC<JsonPostsPropType> = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>

            <p>
                <b>Post ID:</b> {post.id} | <b>User ID:</b> {post.userId}
            </p>

            <p>{post.body}</p>
        </div>
    );
};


export default JsonPlaceholderPostComponent;
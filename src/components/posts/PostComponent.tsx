import type {IPostDummyJson} from "../../models/IPost.ts";
import type {FC} from "react";

interface PostComponentProps {
    post: IPostDummyJson
}
const PostComponent:FC<PostComponentProps> = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <hr></hr>
            <p>{post.body}</p>
            <hr></hr>
        </div>
    );
};

export default PostComponent;
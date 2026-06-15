import type {IPostDummyJson} from "../../../models/dummyjson/DummyJsonPostsModel.ts";
import type {FC} from "react";

type DummyJsonPostComponentProps = {
    post: IPostDummyJson;
}
const DummyJsonPostComponent:FC<DummyJsonPostComponentProps> = ({post}) => {
    return (
        <div>
                <h2>{post.title}</h2>

                <p>
                    <b>ID:</b> {post.id} | <b>User:</b> {post.userId} | <b>Views:</b> {post.views}
                </p>

                <p>{post.body}</p>

                <hr />

                <h3>Tags</h3>
                <div>
                    {post.tags.map((tag, index) => (
                        <span key={index}>
            #{tag}
          </span>
                    ))}
                </div>

                <hr />

                <h3>Reactions</h3>
                <p>👍 Likes: {post.reactions.likes}</p>
                <p>👎 Dislikes: {post.reactions.dislikes}</p>
        </div>
    );
};

export default DummyJsonPostComponent;
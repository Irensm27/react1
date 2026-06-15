import type {ICommentDummyJson} from "../../../models/dummyjson/DummyJsonCommentsModel.ts";
import type {FC} from "react";

type DummyJsonCommentComponentProps = {
    comment: ICommentDummyJson;
}

const DummyJsonCommentComponent:FC<DummyJsonCommentComponentProps> = ({comment}) => {
    return (
        <div>
                <p>{comment.body}</p>

                <p>
                    <b>Comment ID:</b> {comment.id} | <b>Post ID:</b> {comment.postId}
                </p>

                <hr />

                <div>
                    <div>
                        <b>{comment.user.fullName}</b> (@{comment.user.username})
                    </div>

                    <div>👍 {comment.likes}</div>
                </div>
        </div>
    );
};

export default DummyJsonCommentComponent;
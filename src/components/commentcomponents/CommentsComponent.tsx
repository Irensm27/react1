import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {commentsAction} from "../../redux/slices/CommentSlice.ts";
import type {IComment} from "../../model/IComment.ts";


const CommentsComponent = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentsAction.loadComments())
    },[])

    return (
        <div>
            {
                comments.map((comment:IComment) => <div key={comment.id}>{comment.name}</div>)
            }
        </div>
    );
};

export default CommentsComponent;
import {useEffect, useState} from "react";
import {loadComments} from "../../service/api.service.comment.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import type {ICommentModel} from "../../models/CommentModel.ts";

export const CommentsComponent = () =>{
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        async function fetchComments() {
            const allComments = await loadComments();
            setComments(allComments);
        }
        fetchComments();
    },[]);

    return (
        <div>{
            comments.map((comment: ICommentModel) => (<CommentComponent comment={comment} key={comment.id}/>))}
        </div>
    )
};





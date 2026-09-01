import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {commentsAction} from "../../redux/slices/CommentSlice.ts";
import type {IComment} from "../../model/IComment.ts";
import CommentComponent from "./CommentComponent.tsx";


const CommentsComponent = () => {
    //компонент запускає завантаження коментарів та отримує їх з Redux Store для відображення списку
    const dispatch = useAppDispatch();//створюємо діспатч для запуску actions та thunks
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    //отримуємо коментарі через useAppSelector звертаючись до них через commentStoreSlice
    useEffect(() => {
        dispatch(commentsAction.loadComments())
    },[])
    // Запускаємо thunk для завантаження коментарів

    return (
        <div>
            {
                comments.map((comment:IComment) => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );//перебираємо масив коментарів, для кожного з них створюємо CommentComponent, через який будемо їх відображати
};

export default CommentsComponent;
// з постами та юзерами робимо все те саме у відповідних компонентах
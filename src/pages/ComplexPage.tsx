import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentsAction} from "../redux/slices/CommentSlice.ts";


const ComplexPage = () => {
    const dispatch = useAppDispatch();//// створюємо dispatch, // за допомогою нього будемо запускати thunks
    const {commentStoreSlice:{comments}, userStoreSlice:{users}, postStoreSlice:{posts}} = useAppSelector(state => state);
    //використовуємо хук для отримання стейтів(масив коментарів, юзерів, постів), дістаємо наші дані з відповідних слайсів за допомогою деструктуризації

    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers())
        }//кажемо, що якщо наш масив порожній - завантажуємо користувачів з userActions.loadUsers
        //якщо користувачі вже є в сторі - повторно запит не робимо
        //з постами та коментарями робимо те саме
        if(!posts.length){
            dispatch(postActions.loadPosts())
        }
        if(!comments.length){
            dispatch(commentsAction.loadComments())
        }
    },[])
    return (
        <div>

        </div>
    );
};

export default ComplexPage;
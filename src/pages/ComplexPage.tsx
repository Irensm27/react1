import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentsAction} from "../redux/slices/CommentSlice.ts";


const ComplexPage = () => {
    //компонент перевіряє, чи є користувачі, пости та коментарі в Redux Store, і якщо масиви порожні - запускає їх завантаження
    const dispatch = useAppDispatch();// створюємо dispatch, за допомогою нього будемо запускати thunks
    const {commentStoreSlice:{comments}, userStoreSlice:{users}, postStoreSlice:{posts}} = useAppSelector(state => state);
    //використовуємо хук для отримання стейтів(масив коментарів, юзерів, постів), дістаємо наші дані з відповідних слайсів за допомогою деструктуризації
    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers())
        }//кажемо, що якщо наш масив порожній - завантажуємо користувачів з userActions.loadUsers
        //якщо користувачі вже є в сторі - повторно запит не робимо

        if(!posts.length){
            dispatch(postActions.loadPosts())
        }
        //кажемо, що якщо наш масив порожній - завантажуємо пости з postActions.loadPosts
        //якщо пости вже є в сторі - повторно запит не робимо
        if(!comments.length){
            dispatch(commentsAction.loadComments())
        }
        //кажемо, що якщо наш масив порожній - завантажуємо коментарі з commentsAction.loadComments
        //якщо коментарі вже є в сторі - повторно запит не робимо
    },[])
    return (
        <div>

        </div>
    );
};

export default ComplexPage;
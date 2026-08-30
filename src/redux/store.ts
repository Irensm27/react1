import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";
import {postSlice} from "./slices/PostSlice.ts";
import {commentSlice} from "./slices/CommentSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        userStoreSlice:userSlice.reducer,
        postStoreSlice:postSlice.reducer,
        commentStoreSlice:commentSlice.reducer,
    }
});//створюємо сховище, записуємо слайси(створюємо місце для юзерів, постів та коментарів), до кожного слайса вказуємо редюсери, які керуватимуть даними в сховищі

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
//створюємо хук, який дозволить відправляти actions і thunks у Redux, withTypes передає тип нашого dispatch, який TypeScript автоматично визначає на основі store
export const useAppSelector=useSelector.withTypes<ReturnType<typeof store.getState>>();
//хук, який дозволить отримувати дані з Redux з типізацією
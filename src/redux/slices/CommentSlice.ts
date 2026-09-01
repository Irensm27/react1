import type {IComment} from "../../model/IComment.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {commentService} from "../../services/api.service.ts";

type CommentSliceType = {
    comments:IComment[];
    error:string | null;
}//тип для CommentSlice, вказуємо масив коментарів та поле для помилки

const initCommentSliceState:CommentSliceType = {
    comments:[],
    error:null
};//створюємо початковий стан для слайсу коментарів: масив коментарів поки що пустий, помилки немає

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI)=>{
    try {
        const comments = await commentService.getAllComments();
        return thunkAPI.fulfillWithValue(comments);
    } catch {
        return thunkAPI.rejectWithValue('error');
    }

});//створюємо thunk для завантаження коментарів, вказуємо назву та асинхронність функції
//отримуємо коментарі за допомогою commentService
//якщо запит успішний - передаємо отримані коментарі в fulfilled
//якщо виникла помилка - передаємо повідомлення про помилку в rejected

export const commentSlice = createSlice({//створюємо слайс для коментарів
    name:'commentSlice',
    initialState: initCommentSliceState,//вказуємо його початковий стан
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
            state.comments = action.payload;//кладемо отримані коментарі в Redux
            state.error = null;//якщо запит успішний - очищаємо попередню помилку
        })
        .addCase(loadComments.rejected, (state, action)=>{
            state.error = action.payload as string;//якщо запит завершився помилкою - записуємо повідомлення про помилку в Redux
        })

});//extraReducers використовуємо для обробки результатів loadComments
//якщо loadComments успішно виконався - отримуємо коментарі і записуємо їх у state.comments
//якщо виникла помилка - записуємо її в state.error

export const commentsAction = {...commentSlice.actions, loadComments};//збираємо actions нашого слайсу та loadComments в один об'єкт commentsAction та експортуємо


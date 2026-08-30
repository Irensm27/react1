import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../model/IComment.ts";
import {commentService} from "../../services/api.service.ts";


type CommentSliceType={
    comments:IComment[];
}//тип для CommentSlice

const initCommentSliceState:CommentSliceType = {comments:[]};//створюємо початковий стан для слайсу коментарів(поки що пустий масив), вказуємо його тип

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI)=>{
    try {
        const comments = await commentService.getAllComments();
        console.log(comments)
        return thunkAPI.fulfillWithValue(comments);
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue('error');
    }

});
//створюємо thunk для завантаження коментарів, вказуємо назву та асинхронність функції, робимо перевірку: отримуємо коментарі та виводимо в консоль,
//якщо запит успішний передаємо дані в fulfilled
//якщо помилка - виводимо її в консоль та передаємо повідомлення про неї в rejected

export const commentSlice= createSlice({// створюємо слайс для коментарів
    name:'commentSlice',
    initialState: initCommentSliceState,//вказуємо її початковий стан
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
            state.comments=action.payload//кладемо отримані коментарі в Redux
        })
        .addCase(loadComments.rejected, (state, action) => {
            console.log(state);
            console.log(action)
        })
});
//extraReducers використовуємо для обробки результатів. додаємо кейси: якщо loadComments успішно виконався - отримуємо коментарі і записуємо їх у стейт(вказуємо їх типізацію)
//якщо помилка - виводимо її в консоль

export const commentsAction = {...commentSlice.actions, loadComments}// експортуємо для подальшого використання в компонентах

// в інших двох слайсах виконуємо ті самі дії
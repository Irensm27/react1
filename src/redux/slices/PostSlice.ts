import type {IPost} from "../../model/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[];
    error: string | null;
}//тип для PostSlice, вказуємо масив постів та поле для помилки

const initPostSliceState: PostSliceType = {
    posts: [],
    error: null
};//створюємо початковий стан для слайсу постів: масив постів поки що пустий, помилки немає

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI)=>{
    try {
        const posts = await postService.getAllPosts();
        return thunkAPI.fulfillWithValue(posts);
    } catch {
        return thunkAPI.rejectWithValue('error');
    }
});//створюємо thunk для завантаження постів, вказуємо назву та асинхронність функції
//отримуємо пости за допомогою postService
//якщо запит успішний - передаємо отримані пости в fulfilled
//якщо виникла помилка - передаємо повідомлення про помилку в rejected

export const postSlice = createSlice({//створюємо слайс для постів
    name:'postSlice',
    initialState: initPostSliceState,//вказуємо його початковий стан
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>)=>{
            state.posts = action.payload;//кладемо отримані пости в Redux
            state.error = null;//якщо запит успішний - очищаємо попередню помилку
        })
        .addCase(loadPosts.rejected, (state, action)=>{
            state.error = action.payload as string;//якщо запит завершився помилкою - записуємо повідомлення про помилку в Redux
        })

});//extraReducers використовуємо для обробки результатів loadPosts
//якщо loadPosts успішно виконався - отримуємо пости і записуємо їх у state.posts
//якщо виникла помилка - записуємо її в state.error

export const postActions = {...postSlice.actions, loadPosts};//збираємо actions нашого слайсу та loadPosts в один об'єкт postActions та експортуємо

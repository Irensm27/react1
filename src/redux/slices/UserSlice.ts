import type {IUser} from "../../model/IUser.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[];
    error: string | null;
}//тип для UserSlice, вказуємо масив користувачів та поле для помилки

const initUserSliceState: UserSliceType = {
    users: [],
    error: null
};//створюємо початковий стан для слайсу користувачів: масив користувачів поки що пустий, помилки немає

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI)=>{
    try {
        const users = await userService.getAllUsers();
        return thunkAPI.fulfillWithValue(users);
    } catch {
        return thunkAPI.rejectWithValue('error');
    }

});//створюємо thunk для завантаження користувачів, вказуємо назву та асинхронність функції
//отримуємо користувачів за допомогою userService
//якщо запит успішний - передаємо отриманих користувачів у fulfilled
//якщо виникла помилка - передаємо повідомлення про помилку в rejected

export const userSlice = createSlice({//створюємо слайс для користувачів
    name:'userSlice',
    initialState: initUserSliceState,//вказуємо його початковий стан
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload;//кладемо отриманих користувачів у Redux
            state.error = null;//якщо запит успішний - очищаємо попередню помилку
        })
        .addCase(loadUsers.rejected, (state, action)=>{
            state.error = action.payload as string;//якщо запит завершився помилкою - записуємо повідомлення про помилку в Redux
        })

});//extraReducers використовуємо для обробки результатів loadUsers
//якщо loadUsers успішно виконався - отримуємо користувачів і записуємо їх у state.users
//якщо виникла помилка - записуємо її в state.error

export const userActions = {
    ...userSlice.actions,
    loadUsers
};//збираємо actions нашого слайсу та loadUsers в один об'єкт userActions та експортуємо
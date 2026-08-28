import type {IUser} from "../../model/IUser.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service.ts";

type UserSliceType={
    users:IUser[];
}

const initUserSliceState:UserSliceType = {users:[]};

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI)=>{
    try {
        const users = await userService.getAllUsers();
        return thunkAPI.fulfillWithValue(users);
    } catch (error) {
        return thunkAPI.rejectWithValue('error');
    }

})

export const userSlice= createSlice({
    name:'userSlice',
    initialState: initUserSliceState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            state.users=action.payload;})
        .addCase(loadUsers.rejected, (state, action) => {
                state.error = action.payload;
            })

});

export const userActions = {...userSlice.actions, loadUsers};

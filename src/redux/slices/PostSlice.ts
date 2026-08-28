import type {IPost} from "../../model/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {postService} from "../../services/api.service.ts";


type PostSliceType = {
    posts:IPost[];
}

const initPostSliceState:PostSliceType = {posts:[]};

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI)=>{
    try {
        const posts = await postService.getAllPosts();
        console.log(posts);
        return thunkAPI.fulfillWithValue(posts);
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue('error');
    }
})

export const postSlice= createSlice({
    name:'postSlice',
    initialState: initPostSliceState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>)=>{
            state.posts=action.payload
        })
        .addCase(loadPosts.rejected, (state, action) => {
            console.log(state);
            console.log(action)
    })
});

export const postActions = {...postSlice.actions, loadPosts};

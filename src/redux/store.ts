import {configureStore, createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../model/IUser.ts";
import type {IPost} from "../model/IPost.ts";
import type {IComment} from "../model/IComment.ts";

type UserSliceType={
    users:IUser[];
}

const initUserSliceState:UserSliceType = {users:[]};

const userSlice= createSlice({
    name:'userSlice',
    initialState: initUserSliceState,
    reducers:{},
    extraReducers: builder => builder,
});

type PostSliceType = {
    posts:IPost[];
}

const initPostSliceState:PostSliceType = {posts:[]};

const postSlice= createSlice({
    name:'postSlice',
    initialState: initPostSliceState,
    reducers:{},
    extraReducers: builder => builder,
});

type CommentSliceType={
    comments:IComment[];
}

const initCommentSliceState:CommentSliceType = {comments:[]};

const commentSlice= createSlice({
    name:'commentSlice',
    initialState: initCommentSliceState,
    reducers:{},
    extraReducers: builder => builder,
});

export const store = configureStore({
    reducer: {
        userStoreSlice:userSlice.reducer,
        postStoreSlice:postSlice.reducer,
        commentStoreSlice:commentSlice.reducer,
    }
});
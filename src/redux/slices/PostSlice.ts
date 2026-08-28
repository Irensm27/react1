import type {IPost} from "../../model/IPost.ts";
import {createSlice} from "@reduxjs/toolkit";

type PostSliceType = {
    posts:IPost[];
}

const initPostSliceState:PostSliceType = {posts:[]};

export const postSlice= createSlice({
    name:'postSlice',
    initialState: initPostSliceState,
    reducers:{},
    extraReducers: builder => builder,
});

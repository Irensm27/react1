import { createSlice} from "@reduxjs/toolkit";
import type {IComment} from "../../model/IComment.ts";

type CommentSliceType={
    comments:IComment[];
}

const initCommentSliceState:CommentSliceType = {comments:[]};

export const commentSlice= createSlice({
    name:'commentSlice',
    initialState: initCommentSliceState,
    reducers:{},
    extraReducers: builder => builder,
});
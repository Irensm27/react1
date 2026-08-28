import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../model/IComment.ts";
import {commentService} from "../../services/api.service.ts";


type CommentSliceType={
    comments:IComment[];
}

const initCommentSliceState:CommentSliceType = {comments:[]};

const loadComments = createAsyncThunk('loadPosts', async (_, thunkAPI)=>{
    try {
        const comments = await commentService.getAllComments();
        console.log(comments)
        return thunkAPI.fulfillWithValue(comments);
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue('error');
    }

});

export const commentSlice= createSlice({
    name:'commentSlice',
    initialState: initCommentSliceState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
            state.comments=action.payload
        })
        .addCase(loadComments.rejected, (state, action) => {
            console.log(state);
            console.log(action)
        })
});

export const commentsAction = {...commentSlice.actions, loadComments}
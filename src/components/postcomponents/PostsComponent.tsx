import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice.ts";
import type {IPost} from "../../model/IPost.ts";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state =>state.postStoreSlice.posts )
    useEffect(() => {
        dispatch(postActions.loadPosts());
    },[])
    return (
        <div>
            {
                posts.map((post:IPost) => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;
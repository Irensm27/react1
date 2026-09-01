import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice.ts";
import type {IPost} from "../../model/IPost.ts";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    //компонент запускає завантаження постів та отримує їх з Redux Store для відображення списку
    const dispatch = useAppDispatch();//створюємо діспатч для запуску actions та thunks
    const posts = useAppSelector(state =>state.postStoreSlice.posts )
    //отримуємо пости через useAppSelector звертаючись до них через postStoreSlice
    useEffect(() => {
        dispatch(postActions.loadPosts());
        // Запускаємо thunk для завантаження постів
    },[])
    return (
        <div>
            {
                posts.map((post:IPost) => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};//перебираємо масив постів, для кожного з них створюємо PostComponent, через який будемо їх відображати

export default PostsComponent;
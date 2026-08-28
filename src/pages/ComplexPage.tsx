import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentsAction} from "../redux/slices/CommentSlice.ts";


const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {commentStoreSlice:{comments}, userStoreSlice:{users}, postStoreSlice:{posts}} = useAppSelector(state => state);

    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers())
        }
        if(!posts.length){
            dispatch(postActions.loadPosts())
        }
        if(!comments.length){
            dispatch(commentsAction.loadComments())
        }
    },[])
    return (
        <div>

        </div>
    );
};

export default ComplexPage;
import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import {useEffect, useState} from "react";
import {postServices} from "../../services/api.service.tsx";


type PostTypeProps={
    userId:string;
}
const PostsComponent:FC<PostTypeProps> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(()=>{
        if (userId){
            postServices.getAllPostsOfUserById(+userId)
                .then(value =>setPosts(value));
        }},[userId])
    return (
        <div>
            {
                posts.map((post:IPost) => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;
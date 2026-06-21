import {useEffect, useState} from "react";
import type {IPostDummyJson} from "../../models/IPost.ts";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import PostComponent from "./PostComponent.tsx";


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostDummyJson[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {posts:IPostDummyJson[]}>('/posts')
            .then(({posts}) => setPosts(posts));
    }, []);
    return (
        <div>
            {posts.map((post: IPostDummyJson) => <PostComponent key={post.id} post={post}/>)}

        </div>
    );
};

export default PostsComponent;
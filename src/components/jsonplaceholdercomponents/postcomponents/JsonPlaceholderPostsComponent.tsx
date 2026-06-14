import {useEffect, useState} from "react";
import type {IPostJsonPlaceholder} from "../../../models/jsonplaceholder/JsonPlaceholderPostsModel..ts";
import {getPostsJsonPlaceHolder} from "../../../services/api.service.tsx";
import JsonPlaceholderPostComponent from "./JsonPlaceholderPostComponent.tsx";


const JsonPlaceholderPostsComponent = () => {
    const [posts, setPosts] = useState<IPostJsonPlaceholder[]>([]);

    useEffect(() => {
        async function fetchPostsJsonPlaceHolder(){
            const allPostsJsonPlaceHolder = await getPostsJsonPlaceHolder();
            setPosts(allPostsJsonPlaceHolder);
        }
        fetchPostsJsonPlaceHolder();
    },[])
    return (
        <div>
            {
                posts.map((post: IPostJsonPlaceholder) => <JsonPlaceholderPostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default JsonPlaceholderPostsComponent;


import {useEffect, useState} from "react";
import {getPostsDummyJson} from "../../../services/api.service.tsx";
import type {IPostDummyJson} from "../../../models/dummyjson/DummyJsonPostsModel.ts";
import DummyJsonPostComponent from "./DummyJsonPostComponent.tsx";


const DummyJsonPostsComponent = () => {
    const [posts, setPosts] = useState<IPostDummyJson[]>([]);

    useEffect(() => {
        async function fetchPostsDummyJson(){
            const allPosts = await getPostsDummyJson();
            setPosts(allPosts);
        }
        fetchPostsDummyJson();
    },[])
    return (
        <div>
            {
                posts.map((post:IPostDummyJson) => <DummyJsonPostComponent post={post} key={post.id} /> )
            }

        </div>
    );
};

export default DummyJsonPostsComponent;


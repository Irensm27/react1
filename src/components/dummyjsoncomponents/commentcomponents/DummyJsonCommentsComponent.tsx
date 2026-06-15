import { useEffect, useState} from "react";
import type {ICommentDummyJson} from "../../../models/dummyjson/DummyJsonCommentsModel.ts";
import {getCommentsDummyJson} from "../../../services/api.service.tsx";
import DummyJsonCommentComponent from "./DummyJsonCommentComponent.tsx";


const DummyJsonCommentsComponent = () => {
    const [comments, setComments] = useState<ICommentDummyJson[]>([]);

    useEffect(() => {
        async function fetchCommentDummyJson(){
            const allComments = await getCommentsDummyJson();
            setComments(allComments)
        }
        fetchCommentDummyJson();
    },[])
    return (
        <div>
            {
                comments.map((comment: ICommentDummyJson) => <DummyJsonCommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default DummyJsonCommentsComponent;
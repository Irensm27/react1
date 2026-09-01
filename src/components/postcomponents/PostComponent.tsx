import type {IPost} from "../../model/IPost.ts";
import type {FC} from "react";

interface IPostProps {
    post:IPost
}
//створюємо пропс для наших постів та передаємо post як аргумент в функцію нижче і там вказуємо типізацію

const PostComponent:FC<IPostProps> = ({post}) => {
    //компонент для відображення інформації про один пост
    return (
        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                    Post #{post.id}
                </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800"> {post.title} </h2>
        </div>
    );
};
//відображаємо id та назви наших постів, використовуючи стилізацію tailwind

export default PostComponent;
import type {IPostModel} from "../../models/PostModel.ts";
import type {FC} from "react";

interface IPostProps  {
    post: IPostModel

}
export const PostComponent: FC<IPostProps> = ({ post: { title, id, body } }) => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-md p-5 mb-4 hover:shadow-2xl hover:scale-[1.02] transition duration-300 border border-purple-200">

            <p className="text-sm text-purple-500 font-medium mb-1">
                Post #{id}
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition">
                {title}
            </h3>

            <p className="text-gray-700 leading-relaxed">
                {body}
            </p>

        </div>
    );
};
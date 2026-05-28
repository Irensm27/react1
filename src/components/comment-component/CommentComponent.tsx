import type {FC} from "react";
import type {ICommentModel} from "../../models/CommentModel.ts";

export interface ICommentProps {
    comment: ICommentModel;
}
export const CommentComponent: FC<ICommentProps> = ({comment: {id, name, email,body}}) => {
    return (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl shadow-md hover:shadow-xl transition border border-purple-200">

            <p className="text-xs text-purple-500 mb-1">Comment #{id}</p>

            <h3 className="text-lg font-semibold text-gray-800">
                {name}
            </h3>

            <p className="text-sm text-blue-600 mb-2">
                {email}
            </p>

            <p className="text-gray-700 leading-relaxed">
                {body}
            </p>

        </div>
    );
};
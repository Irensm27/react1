import type {IComment} from "../../model/IComment.ts";
import type {FC} from "react";



interface ICommentProps {
    comment: IComment
}//створюємо пропс для наших коментарів та передаємо comment як аргумент в функцію нижче і там вказуємо типізацію

const CommentComponent:FC<ICommentProps> = ({comment}) => {
    return (
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {comment.name}
            </h3>

            <p className="text-sm leading-6 text-gray-600">
                {comment.body}
            </p>
        </div>
    );//відображаємо ім'я та боді наших коментарів, використовуючи стилізацію tailwind
};

export default CommentComponent;
// з постами та юзерами робимо те саме у відповідних компонентах
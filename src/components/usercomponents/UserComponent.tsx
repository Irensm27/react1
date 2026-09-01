import type {IUser} from "../../model/IUser.ts";
import type {FC} from "react";

interface IUserProps {
    user: IUser
}//створюємо пропс для наших юзерів та передаємо user як аргумент в функцію нижче і там вказуємо типізацію

const UserComponent:FC<IUserProps> = ({user}) => {
    //компонент для відображення інформації про одного користувача
    return (
        <div className="mb-4 flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-600">
                {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800"> {user.name} </h2>
                <p className="text-sm text-gray-500"> User #{user.id} </p>
            </div>
        </div>
    );
};
//Виводимо першу літеру імені користувача та переводимо її у верхній регістр
//відображаємо ім'я та id наших юзерів, використовуючи стилізацію tailwind

export default UserComponent;
import {Link} from "react-router-dom";

//створюємо меню з лінками, які відповідають за перехід на відповідні роути, додаємо стилізацію за допомогою tailwind

const Menu = () => {
    return (
        <nav className="border-b border-gray-200 bg-white shadow-sm">
            <ul className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-4">

                {/*створюємо пункт меню Users, який переводить нас на сторінку користувачів*/}
                <li>
                    <Link
                        to="/users"
                        className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                        Users
                    </Link>
                </li>

                {/*створюємо пункт меню Posts, який переводить нас на сторінку постів*/}
                <li>
                    <Link
                        to="/posts"
                        className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                        Posts
                    </Link>
                </li>

                {/*створюємо пункт меню Comments, який переводить нас на сторінку коментарів*/}
                <li>
                    <Link
                        to="/comments"
                        className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                        Comments
                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default Menu;

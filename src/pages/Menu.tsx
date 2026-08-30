import {Link} from "react-router-dom";

//створюємо меню з лінками, які відповідають за перехід на відповідні роути, додаємо стилізацію за допомогою tailwind

const Menu = () => {
    return (
        <nav className="border-b border-gray-200 bg-white shadow-sm">
            <ul className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-4">

                <li>
                    <Link
                        to="/users"
                        className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                        Users
                    </Link>
                </li>

                <li>
                    <Link
                        to="/posts"
                        className="rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                        Posts
                    </Link>
                </li>

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

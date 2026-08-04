import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
            <ul className="flex gap-6 items-center">
                <li>
                    <Link
                        to="/cars"
                        className="hover:text-yellow-400 transition font-medium"
                    >
                        Cars
                    </Link>
                </li>

                <li>
                    <Link
                        to="/cars/create"
                        className="bg-yellow-400 text-black px-4 py-1 rounded-xl hover:bg-yellow-300 transition font-medium"
                    >
                        + Create Car
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <ul>
            <li>
                <Link to='/posts'>Posts</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>

        </ul>
    );
};

export default MenuComponent;
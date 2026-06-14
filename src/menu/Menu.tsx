import {Link} from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>

                <li><Link to='/jsonplaceholder/users'>Users JSON</Link></li>
                <li><Link to='/dummyjson/users'>Users Dummy</Link></li>

                <li><Link to='/jsonplaceholder/posts'>Posts JSON</Link></li>
                <li><Link to='/dummyjson/posts'>Posts Dummy</Link></li>

                <li><Link to='/jsonplaceholder/comments'>Comments JSON</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
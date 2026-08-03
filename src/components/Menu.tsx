import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/cars'>cars</Link>
            </li>
            <li>
                <Link to='/cars/create'>createCars</Link>
            </li>
            
        </ul>
    );
};

export default Menu;
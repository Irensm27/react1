import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            Main page
            <Outlet/>
        </div>
    );
};

export default MainLayout;
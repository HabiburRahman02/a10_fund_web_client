import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const notShow = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div>
            <div className={`${location.pathname === '/' ? 'pb-0' : 'pb-20'}`}>
                {notShow || <Navbar></Navbar>}
            </div>

            <div className="">
                <Outlet></Outlet>
            </div>

            <div>
                {notShow || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;
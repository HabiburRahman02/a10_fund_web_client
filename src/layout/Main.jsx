import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const notShow = location.pathname.includes('/login') || location.pathname.includes('/register')
    const matched = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register'
    return (
        <div>
            <div className={`${matched ? 'pb-0' : 'pb-20'}`}>
                {notShow || <Navbar></Navbar>}
            </div>

            <div className="min-h-72">
                <Outlet></Outlet>
            </div>

            <div>
                {notShow || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;
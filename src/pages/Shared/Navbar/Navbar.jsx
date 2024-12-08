import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContent } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from '../../../assets/logo/logo.jpg'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContent);
    const location = useLocation();
    const matched = location.pathname === '/'

    const handleThemeChange = () => {
        document.documentElement.classList.toggle('dark');
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Logout user successfully",
                    showConfirmButton: true,
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/allCampaign'>All Campaign</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/addNewCampaign'>Add New Campaign</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/myCampaign'>My Campaign</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/myDonation'>My Donation</NavLink>
    </>
    return (
        <div className={`text-white py-3 ${matched ? 'fixed top-0 z-50 w-full' : 'bg-[#1d181f]'}`}>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="bg-[#1d181f] text-white menu menu-sm dropdown-content rounded-box z-[1] mt-3 space-y-3 w-60 p-4 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center gap-2">
                        <img src={logo} className="h-12 w-12 bg-white rounded-full" alt="" />
                        <h4 className="text-2xl font-semibold hidden md:block" to='/'>CrowdCube</h4>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <input onClick={handleThemeChange} type="checkbox" className="toggle text-blue-500" />
                    {
                        user ?
                            <div className="flex items-center gap-2">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 h-10 object-cover rounded-full border-2 border-[rgb(37,168,214)] p-1">
                                            <img className="rounded-full " src={user?.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-[#1d181f] text-white rounded-box z-[1] mt-2 w-52 py-4 px-2">

                                        <li><a>{user?.displayName}</a></li>
                                        <li><a>{user?.email}</a></li>
                                        <li className="text-center mx-auto ">
                                            <button
                                                onClick={handleLogOut}
                                                className="py-2 px-12 mt-4 text-center mx-auto border-2  text-white font-bold hover:bg-[rgb(37,168,214)] hover:border-[rgb(37,168,214)] transition-colors rounded-none">
                                                Log Out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            :
                            <>
                                <Link to='/login'>
                                    <button className="py-2 px-8 border-2  hover:text-white font-bold hover:bg-[rgb(37,168,214)] hover:border-[rgb(37,168,214)] transition-colors">
                                        Login
                                    </button>
                                </Link>
                                <Link to='/register'>
                                    <button className="py-2 px-8 hidden md:block text-white font-bold border-[2px] bg-[rgb(37,168,214)] border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all">
                                        Register
                                    </button>
                                </Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
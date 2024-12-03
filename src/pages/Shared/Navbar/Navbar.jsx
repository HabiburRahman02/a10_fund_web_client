import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/allCampaign'>All Campaign</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/addNewCampaign'>Add New Campaign</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/myCampaign'>My Campaign</NavLink>
        <NavLink className={({ isActive }) => `mr-4 uppercase text-md hover:text-blue-400 transition-all font-medium ${isActive && ' border-b-[2px]'}`} to='/myDonation'>My Donation</NavLink>

    </>
    return (
        <div className=" text-white py-3 fixed z-50 top-0 w-full">
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
                            className="bg-[rgb(37,168,214)] text-white menu menu-sm dropdown-content rounded-box z-[1] mt-3 space-y-3 w-60 p-4 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center gap-2">
                        <img className="h-12 w-12 bg-white rounded-full" alt="" />
                        <h4 className="text-2xl font-semibold hidden md:block" to='/'>CrowdCube</h4>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {/* {
                    user && user?.photoURL &&
                    <div className="avatar online">
                        <div className="w-12 h-12 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                }
                {
                    user ? <>
                        <button onClick={handleLogOut} className="bg-white py-3 px-4 text-black hover:text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                            Logout
                        </button>
                    </> :
                        <Link to='/login'>
                            <button className="bg-white py-3 px-8 text-black hover:text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                                Login
                            </button>
                        </Link>
                } */}
                    <Link to='/login'>
                        <button className="py-2 px-8 border-2  hover:text-white font-bold hover:bg-[rgb(37,168,214)] hover:border-[rgb(37,168,214)] transition-colors">
                            Login
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className="py-2 px-8  text-white font-bold  
                         border-[2px]
                         bg-[rgb(37,168,214)]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
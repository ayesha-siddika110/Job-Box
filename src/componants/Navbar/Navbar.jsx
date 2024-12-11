import { NavLink } from "react-router-dom";
import './navbar.css'
import logo from '../../assets/2.png'


const Navbar = () => {

    const links = <>
    
                <NavLink to="/">Home</NavLink>
                <NavLink to="findJob" >Find A Job</NavLink>
                <NavLink to="candidates" >Candidates</NavLink>
                <NavLink to="blogs" >Blogs</NavLink>
                <NavLink to="pages" >Pages</NavLink>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col space-y-5">
                            {links}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                        <img className="w-[50px]" src={logo} alt="" />
                        <p className="text-3xl font-semibold">JOB BOX</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-blue-600 py-2 px-5 text-white font-semibold rounded-md">Login</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
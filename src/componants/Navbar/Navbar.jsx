import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import logo from '../../assets/2.png'
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user,signOutUser } = useContext(AuthContext)

    const handlesignOut =()=>{
        // console.log('sign out f');
        
        signOutUser()
        .then(res=>{
            console.log(res);
            
        })
        .catch(err=>{
            console.log(err.message);
            
        })
    }

    const logBtn = <>
        {
            user ? <>
                <div className="drawer drawer-end ">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex justify-end">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button"><img src={user?.photoURL} className="w-14 rounded-full h-14 object-cover" alt="" /></label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content  w-80 p-6 space-y-3 mt-24 ">
                            {/* Sidebar content here */}
                            <img src={user?.photoURL} className="w-14 rounded-full h-14 m-auto object-cover " alt="" />
                            <li className="text-xl font-semibold text-center">{user?.displayName}</li>
                            <li className="text-base text-center">{user?.email}</li>
                            <div className="">

                            
                            </div>
                            <li><button onClick={handlesignOut} className=" w-full border border-blue-600 text-blue-600 text-center">Sign Out</button></li>
                        </ul>
                    </div>
                </div>


            </> : <>
                <Link to="/login">

                    <motion.a whileHover={{ scale: 1, y: -2, dumping: 10, stiffness: 400 }} className="bg-blue-600 py-2 px-5 text-white font-semibold rounded-md">Login</motion.a>
                </Link>

            </>
        }


    </>

    const links = <>

        <NavLink to="/" className={`dropdown`}>Home

        </NavLink>
        <NavLink to="/findJob" >Find A Job</NavLink>
        {/* <NavLink to="candidates" >Candidates</NavLink> */}
        {/* <NavLink to="blogs" >Blogs</NavLink> */}
        {/* <NavLink to="pages" >Pages</NavLink> */}
        {
            user && <>
            <NavLink to="/publishJob" >Publish a Job</NavLink>
            <NavLink to={`/myjobs/${user?.email}`} >My jobs</NavLink>
            <NavLink to={`/mypostedjob`} >My posted job</NavLink>
            
            </>
        }
        

    </>
    return (
        <div className=" shadow-lg">
            <div className="navbar w-[90%] py-4 m-auto bg-base-100 flex justify-between items-center">
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
                    {logBtn}
                </div>
            </div>

        </div>
    );
};

export default Navbar;
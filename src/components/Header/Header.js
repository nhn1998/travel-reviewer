import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import logo from '../Header/logo.png'
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const {user,logOut} =useContext(authContext)
    const HandleLogOut = ()=>{
        logOut()
        .then()
        .catch(err=>console.log(err))
    }
    return (
        <div className="navbar bg-orange-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/about' className="justify-between">
                                About us
                            </Link>
                        </li>
                        <li><Link to='blog'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Travel Reviewer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li><Link to='/blog'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end mr-10">
                <Link to='/login' className="btn mr-3">Login</Link>
                <Link to='/signup'><button className="btn btn-accent">Register</button></Link>
                <button onClick={HandleLogOut}><FaSignOutAlt></FaSignOutAlt></button>
            </div>
        </div>
    );
};

export default Header;
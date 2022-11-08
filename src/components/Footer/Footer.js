import React from 'react';
import logo from '../Header/logo.png';
import { FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer mt-20 p-32 bg-neutral text-neutral-content h-full">
            <div>
                <img className='w-32 ml-10' src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <FaFacebookSquare size={30}></FaFacebookSquare>
                    <FaTwitterSquare size={30}></FaTwitterSquare>
                    <FaYoutubeSquare size={30}></FaYoutubeSquare>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
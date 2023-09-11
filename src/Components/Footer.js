import React from "react";
import '../styles/Footer.css'
import {BsInstagram, BsSnapchat, BsTwitter, BsFacebook} from 'react-icons/bs'

export default function Footer() {
    return (
        <div className="footer-basic">
            <div className="social">
                <a href=" ">
                    {/* <i className="icon ion-social-instagram"></i> */}
                    <BsInstagram/>
                </a>
                <a href=" ">
                    <BsSnapchat/>
                </a>
                <a href=" ">
                    <BsTwitter/>
                </a>
                <a href=" ">
                    <BsFacebook/>
                </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href=" ">Home</a>
                </li>
                <li className="list-inline-item">
                    <a href=" ">Services</a>
                </li>
                <li className="list-inline-item">
                    <a href=" ">About</a>
                </li>
                <li className="list-inline-item">
                    <a href=" ">Terms</a>
                </li>
                <li className="list-inline-item">
                    <a href=" ">Privacy Policy</a>
                </li>
            </ul>
            <p className="copyright">Sandeep Blogs © 2023</p>
        </div>
    );
}

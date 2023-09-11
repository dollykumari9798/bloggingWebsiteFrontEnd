import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header">
            <div className="hLeft">
                <span>
                    <Link to="/">Logo</Link>
                </span>
                <ul>
                    <li>
                        <Link to="/blogs">All Blogs</Link>
                    </li>
                    <li>
                        <Link to="/admin/drafts">Drafts</Link>
                    </li>
                    <li>
                        <Link to="/admin/create">Compose Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="hRight">
                <div className="inputBox_container">
                    <svg
                        className="search_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        alt="search icon"
                    >
                        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
                    </svg>
                    <input
                        className="inputBox"
                        id="inputBox"
                        type="text"
                        placeholder="Search For Blogs"
                    />
                </div>
                {true && (
                    <Link className="loginBtn" to="/admin/login">
                        <button class="contactButton">
                            Login
                            <div class="iconButton">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

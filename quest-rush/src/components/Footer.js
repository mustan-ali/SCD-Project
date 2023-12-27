import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <header className="footer">
            <h1 className="logo">Copyright &copy; {(new Date().getFullYear())} All Rights Reserved by &nbsp;<a href="/">Quest Rush</a></h1>
            <ul className="main-nav">
                <li><a href="http://localhost:3000"><i className="fa fa-facebook fa-lg"></i></a></li>
                <li><a href="http://localhost:3000/"><i className="fa fa-twitter fa-lg"></i></a></li>
                <li><a href="http://localhost:3000/"><i className="fa fa-dribbble fa-lg"></i></a></li>
                <li><a href="http://localhost:3000/"><i className="fa fa-linkedin fa-lg"></i></a></li>
            </ul>
        </header>
    )
}

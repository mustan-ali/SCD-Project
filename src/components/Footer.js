import React from "react";
import "./Footer.css";


export default function Footer() {
    return (
        <header class="footer">
            <h1 class="logo">Copyright &copy; {(new Date().getFullYear())} All Rights Reserved by &nbsp;<a href="#">Quest Rush</a></h1>
            <ul class="main-nav">
                <li><a href=""><i class="fa fa-facebook fa-lg"></i></a></li>
                <li><a href=""><i class="fa fa-twitter fa-lg"></i></a></li>
                <li><a href=""><i class="fa fa-dribbble fa-lg"></i></a></li>
                <li><a href=""><i class="fa fa-linkedin fa-lg"></i></a></li>
            </ul>
        </header>
    )
}

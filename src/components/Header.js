import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header class="header">
            <h1 class="logo"><a href="#">Quest Rush</a></h1>
            <ul class="main-nav">
                <li><a href="">Home</a></li>
                <li><a href="">Quest</a></li>
                <li><a href="">Create Quest</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </header>
    )
}

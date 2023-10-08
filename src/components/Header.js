import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1 className="logo"><a href='#'>Quest Rush</a></h1>
            <ul className="main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Quests</a></li>
                <li><a href="#">Create Quest</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </header>
    )
}

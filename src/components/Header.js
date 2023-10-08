import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h1 className="logo"><a href='/'>Quest Rush</a></h1>
            <ul className="main-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quests">Quests</Link></li>
                <li><Link to="/create-quest">Create Quest</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </header>
    )
}

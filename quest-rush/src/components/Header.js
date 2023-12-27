import React from "react";
import "./Header.css";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">
        <a href="/">Quest Rush</a>
      </h1>
      <div className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quests">Quests</Link>
          </li>
          <li>
            <Link to="/create-quest">Create Quest</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <div className="navigation">
        <ul className={hamburgerOpen ? "open" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quests">Quests</Link>
          </li>
          <li>
            <Link to="/create-quest">Create Quest</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .navigation {
          height: 50px;
          overflow: hidden;
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          list-style: none;
        }

        .navigation ul li {
          padding-right: 10px;
        }

        .hamburger {
          display: none;
          z-index: 6;
        }

        @media (max-width: 800px) {
          .hamburger {
            display: block;
            position: absolute;
            right: 15px;
            z-index: 6;
          }

          .navigation ul {
            display: ${hamburgerOpen ? "flex" : "none"};
            background-color: white;
            margin-top: 50px;
            position: absolute;
            right: 15px;
            flex-direction: column;
            padding: 20px;
            border-radius: 5px;
          }

          .navigation ul a {
            text-decoration: none;
            color: Black;
          }
        }

        @media (max-width: 290px) {
          .hamburger {
            margin-left: 10vw;
          }
        }
      `}</style>
    </header>
  );
}

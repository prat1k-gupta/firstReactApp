import React from "react";
import logo from "./logo192.png"
export default function Header(){
    return(
        <nav className="navbar">
            <div class="logo">
            <img className="logo-img" src={logo} alt="react"></img>
            <h2>FirstReactApp</h2>
            </div>
        </nav>
    )
}
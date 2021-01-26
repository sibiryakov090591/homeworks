import React from "react";
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className={s.menu}>
            <ul>
                <NavLink className={s.menu_item} to={"/pre-junior"}>
                    <li>Pre-Junior</li>
                </NavLink>
                <NavLink className={s.menu_item} to={"/junior"}>
                    <li>Junior</li>
                </NavLink>
                <NavLink className={s.menu_item} to={"/junior-plus"}>
                    <li>Junior-Plus</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Header;

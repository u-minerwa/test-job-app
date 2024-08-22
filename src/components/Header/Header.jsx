import React from "react";
import classes from './Header.module.css';
import NavMenu from "./NavMenu/NavMenu";
import Prezentation from "./Prezentation/Prezentation";

function Header() {
    return (
        <div className={classes.header}>
            <NavMenu />
            <Prezentation />
        </div>
    )
}

export default Header;


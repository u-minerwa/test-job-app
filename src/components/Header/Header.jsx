import React from "react";
import classes from './Header.module.css';
import NavMenu from "./NavMenu/NavMenu";

function Header() {
    return (
        <header className={classes.header}>
            <NavMenu />
        </header>
    )
}

export default Header;


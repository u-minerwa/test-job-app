import React, { useState } from "react";
// import classes from './Header.module.css';
import classes from './Header.module.scss';
import NavMenu from "./NavMenu/NavMenu";
import Prezentation from "./Prezentation/Prezentation";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <header className={classes.header}>
            <button className={classes['header__menu-button']} onClick={toggleMenuHandler}> ☰ </button>
            <div className={`${classes['header__nav-menu']} ${isMenuOpen ? classes['header--show'] : ''}`}>
                <NavMenu />
            </div>
            <Prezentation />
        </header>
    );
}

export default Header;


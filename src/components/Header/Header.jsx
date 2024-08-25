import React, { useState } from "react";
import classes from './Header.module.css';
import NavMenu from "./NavMenu/NavMenu";
import Prezentation from "./Prezentation/Prezentation";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <header className={classes.header}>
            <button className={classes.menuButton} onClick={toggleMenuHandler}> ☰ </button>
            <div className={`${classes.navMenu} ${isMenuOpen ? classes.show : ''}`}>
                <NavMenu />
            </div>
            <Prezentation />
        </header>
    );
}

export default Header;


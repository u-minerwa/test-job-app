import React from "react";
import classes from './NavMenu.module.css';
import { NavLink } from "react-router-dom";

function NavMenu() {
    return (
        <nav>
            <ul className={classes.navigationMenu}>
                <li className={classes.item}><NavLink to="/mainpage"> Главная </NavLink></li>
                <li className={classes.item}><NavLink to="/products"> Продукты </NavLink></li>
                <li className={classes.item}><NavLink to="/cases"> Кейсы </NavLink></li>
                <li className={classes.item}><NavLink to="/experts"> Экспертное мнение </NavLink></li>
                <li className={classes.item}><NavLink to="/contacts"> Контакты </NavLink></li>
            </ul>
        </nav>
    );
}

export default NavMenu;

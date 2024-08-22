import React from "react";
import classes from './NavMenu.module.css';
import { NavLink } from "react-router-dom";

function NavMenu() {
    return (
        <nav className={classes.navigationmenu}>
            <div className={classes.item}>
                <NavLink to='/mainpage'> Главная </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/products'> Продукты </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/cases'> Кейсы </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/experts'> Экспертное мнение </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/contacts'> Контакты </NavLink>
            </div>
        </nav>
    )
}

export default NavMenu;

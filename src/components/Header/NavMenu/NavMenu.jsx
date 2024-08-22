import React from "react";
import classes from './NavMenu.module.css';
import { NavLink } from "react-router-dom";

function NavMenu() {
    return (
        <nav className={classes.navigationmenu}>
            <div className={classes.item}>
                <NavLink to='/mainpage' activeClassName={classes.active}> Главная </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/products' activeClassName={classes.active}> Продукты </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/cases' activeClassName={classes.active}> Кейсы </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/experts' activeClassName={classes.active}> Эксперты </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/contacts' activeClassName={classes.active}> Контакты </NavLink>
            </div>
        </nav>
    )
}

export default NavMenu;

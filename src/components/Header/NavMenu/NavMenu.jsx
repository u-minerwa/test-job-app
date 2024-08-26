import React from "react";
// import classes from './NavMenu.module.css';
import classes from './NavMenu.module.scss';
import { NavLink } from "react-router-dom";

function NavMenu() {
    return (
        <nav>
            <ul className={classes['nav-menu']}>
                <li className={classes['nav-menu__item']}><NavLink to="/mainpage" className={classes['nav-menu__link']}> Главная </NavLink></li>
                <li className={classes['nav-menu__item']}><NavLink to="/products" className={classes['nav-menu__link']}> Продукты </NavLink></li>
                <li className={classes['nav-menu__item']}><NavLink to="/cases" className={classes['nav-menu__link']}> Кейсы </NavLink></li>
                <li className={classes['nav-menu__item']}><NavLink to="/experts" className={classes['nav-menu__link']}> Экспертное мнение </NavLink></li>
                <li className={classes['nav-menu__item']}><NavLink to="/contacts" className={classes['nav-menu__link']}> Контакты </NavLink></li>
            </ul>
        </nav>
    );
}

export default NavMenu;

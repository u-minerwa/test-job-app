import React from "react";
// import classes from './Promo.module.css';
import classes from './Promo.module.scss';

function Promo() {
    return (
        <div className={classes.promo}>
            <div className={classes['promo__red-rect']}></div>
            <div className={classes['promo__text']}>Промо-давление увеличивается</div>
        </div>
    )
}

export default Promo;

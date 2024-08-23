import React from "react";
import classes from './Promo.module.css';

function Promo() {
    return (
        <div className={classes.promo}>
            <div className={classes.redRect}></div>
            <div className={classes.text}>Промо-давление увеличивается</div>
        </div>
    )
}

export default Promo;

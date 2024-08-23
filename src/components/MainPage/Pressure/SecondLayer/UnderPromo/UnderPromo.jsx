import React from "react";
import classes from './UnderPromo.module.css';

function UnderPromo() {
    return (
        <div className={classes.underPromo}>
            <div className={classes.graphic}></div>
            <div className={classes.buttonWhy}>
                <button type="button">Почему увеличивается?</button>
            </div>
        </div>
    )
}

export default UnderPromo;

import React from "react";
import classes from './FirstLayer.module.css';
import Percents from "./Percents/Percents";
import Promo from "./Promo/Promo";

function FirstLayer() {
    return (
        <div className={classes.firstLayer}>
            <Promo />
            <Percents />
        </div>
    )
}

export default FirstLayer;

import React from "react";
// import classes from './FirstLayer.module.css';
import classes from './FirstLayer.module.scss';
import Percents from "./Percents/Percents";
import Promo from "./Promo/Promo";

function FirstLayer() {
    return (
        <div className={classes['first-layer']}>
            <Promo />
            <Percents />
        </div>
    )
}

export default FirstLayer;

import React from "react";
import classes from './Pressure.module.css';
import Promo from "./Promo/Promo";
import Percents from "./Percents/Percents";

function Pressure() {
    return (
        <div className={classes.pressure}>
            <Promo />
            <Percents />
        </div>
    )
}

export default Pressure;

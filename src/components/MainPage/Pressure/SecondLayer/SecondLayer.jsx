import React from "react";
import classes from './SecondLayer.module.css';
import UnderPromo from "./UnderPromo/UnderPromo";
import UnderPercents from "./UnderPercents/UnderPercents";

function SecondLayer() {
    return (
        <div className={classes.secondLayer}>
            <UnderPromo />
            <UnderPercents />
        </div>
    )
}

export default SecondLayer;

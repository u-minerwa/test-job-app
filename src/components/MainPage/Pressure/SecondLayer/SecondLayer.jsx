import React from "react";
import classes from './SecondLayer.module.css';
import UnderPromo from "./UnderPromo/UnderPromo";
import UnderPercents from "./UnderPercents/UnderPercents";

function FirstLayer() {
    return (
        <div className={classes.firstLayer}>
            <UnderPromo />
            <UnderPercents />
        </div>
    )
}

export default FirstLayer;

import React from "react";
// import classes from './SecondLayer.module.css';
import classes from './SecondLayer.module.scss';
import UnderPromo from "./UnderPromo/UnderPromo";
import UnderPercents from "./UnderPercents/UnderPercents";

function SecondLayer() {
    return (
        <div className={classes['second-layer']}>
            <UnderPromo />
            <UnderPercents />
        </div>
    )
}

export default SecondLayer;

import React from "react";
import classes from './Pressure.module.css';
import FirstLayer from "./FirstLayer/FirstLayer";
import SecondLayer from "./SecondLayer/SecondLayer";

function Pressure() {
    return (
        <div className={classes.pressure}>
            <FirstLayer />
            <SecondLayer />
        </div>
    )
}

export default Pressure;

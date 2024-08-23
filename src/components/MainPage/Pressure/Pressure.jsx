import React from "react";
import classes from './Pressure.module.css';
import FirstLayer from "./FirstLayer/FirstLayer";

function Pressure() {
    return (
        <div className={classes.pressure}>
            <FirstLayer />
        </div>
    )
}

export default Pressure;

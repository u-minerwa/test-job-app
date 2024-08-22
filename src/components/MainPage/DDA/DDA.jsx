import React from "react";
import classes from './DDA.module.css';
import DDDAsvg from "./DDDAsvg/DDDAsvg";

function DDA() {
    return (
        <div className={classes.dda}>
            <DDDAsvg />
        </div>
    )
}

export default DDA;

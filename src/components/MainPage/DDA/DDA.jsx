import React from "react";
import classes from './DDA.module.css';
import DDDAsvg from "./DDDAsvg/DDDAsvg";
import AIText from "./AIText/AIText";

function DDA() {
    return (
        <div className={classes.dda}>
            <DDDAsvg />
            <AIText />
        </div>
    )
}

export default DDA;

import React from "react";
import classes from './DDA.module.css';
import DDDAsvg from "./DDDAsvg/DDDAsvg";
import AIText from "./AIText/AIText";
import Rectangles from "./Rectangles/Rectangles";

function DDA() {
    return (
        <div className={classes.dda}>
            <DDDAsvg />
            <AIText />
            <Rectangles />
        </div>
    )
}

export default DDA;

import React from "react";
// import classes from './DDA.module.css';
import classes from './DDA.module.scss';
import DDDAsvg from "./DDDAsvg/DDDAsvg";
import AIText from "./AIText/AIText";
import Rectangles from "./Rectangles/Rectangles";
import Volna from "./Volna/Volna";

function DDA() {
    return (
        <div className={classes.dda}>
            <DDDAsvg />
            <AIText />
            <Rectangles />
            <Volna />
        </div>
    )
}

export default DDA;

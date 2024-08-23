import React from "react";
import classes from './GranularData.module.css';
import GranularSwipe from "./GranularSwipe/GranularSwipe";
import GranularText from "./GranularText/GranularText";

function GranularData() {
    return (
        <div className={classes.granularData}>
            <GranularText />
            <GranularSwipe />
        </div>
    )
}

export default GranularData;

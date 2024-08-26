import React from "react";
// import classes from './GranularData.module.css';
import classes from './GranularData.module.scss';
import GranularSwipe from "./GranularSwipe/GranularSwipe";
import GranularText from "./GranularText/GranularText";

function GranularData() {
    return (
        <div className={classes['granular-data']}>
            <GranularText />
            <GranularSwipe />
        </div>
    )
}

export default GranularData;

import React from "react";
import classes from './SwipeContent.module.css';
import SwipeContentL from "./SwipeContentL/SwipeContentL";
import SwipeContentR from "./SwipeContentR/SwipeContentR";
import OvalsSvg from "./OvalsSvg/OvalsSvg";

function SwipeContent() {
    return (
        <div className={classes.content}>
            <SwipeContentL />
            <OvalsSvg />
            <SwipeContentR />
        </div>
    )
}

export default SwipeContent;


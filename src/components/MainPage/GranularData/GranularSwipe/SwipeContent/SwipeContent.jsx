import React from "react";
// import classes from './SwipeContent.module.css';
import classes from './SwipeContent.module.scss';
import SwipeContentL from "./SwipeContentL/SwipeContentL";
import SwipeContentR from "./SwipeContentR/SwipeContentR";

function SwipeContent() {
    return (
        <div className={classes.content}>
            <SwipeContentL />
            <SwipeContentR />
        </div>
    )
}

export default SwipeContent;


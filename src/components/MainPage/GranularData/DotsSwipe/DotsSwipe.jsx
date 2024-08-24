import React from "react";
import classes from './DotsSwipe.module.css';
import DotsIndicator from "./DotsIndicator/DotsIndicator";
import DotsIndicatorM from "./DotsIndicatorM/DotsIndicatorM";

const DotsSwipe = ({ activeIndex }) => {
    return (
        <div className={classes.dotsSwipe}>
            <DotsIndicator activeIndex={activeIndex} />
            <DotsIndicatorM activeIndex={activeIndex} />
        </div>
    )
}

export default DotsSwipe;

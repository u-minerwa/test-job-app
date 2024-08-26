import React from "react";
// import classes from './Rectangles.module.css';
import classes from './Rectangles.module.scss';
import Rect1 from "./Rect1/Rect1";
import Rect3 from "./Rect3/Rect3";
import Rect2 from "./Rect2/Rect2";
import Rect4 from "./Rect4/Rect4";

function Rectangles() {
    return (
        <div className={classes.rectangles}>
            <Rect1 />
            <Rect2 />
            <Rect3 />
            <Rect4 />
        </div>
    )
}

export default Rectangles;

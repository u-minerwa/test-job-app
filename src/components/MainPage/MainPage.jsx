import React from "react";
// import classes from './MainPage.module.css';
import classes from './MainPage.module.scss';
import DDA from "./DDA/DDA";
import Pressure from "./Pressure/Pressure";
import GranularData from "./GranularData/GranularData";

function MainPage() {
    return (
        <div className={classes['main-page']}>
            <DDA />
            <Pressure />
            <GranularData />
        </div>
    )
}

export default MainPage;


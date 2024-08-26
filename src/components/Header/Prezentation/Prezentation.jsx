import React from "react";
// import classes from './Prezentation.module.css';
import classes from "./Prezentation.module.scss"

function Prezentation() {
    return (
        <div className={classes.prezentation}>
            <button type="button" className={classes.prezentation__button} >Запросить презентацию</button>
        </div>
    )
}

export default Prezentation;


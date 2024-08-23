import React from "react";
import classes from './Percents.module.css';

function Percents() {
    return (
        <div className={classes.percents}>
            <div className={classes.redRect}></div>
            <div className={classes.text}>80% данных не используется производителями</div>
        </div>
    )
}

export default Percents;

import React from "react";
// import classes from './Percents.module.css';
import classes from './Percents.module.scss';

function Percents() {
    return (
        <div className={classes.percents}>
            <div className={classes['percents__red-rect']}></div>
            <div className={classes['percents__text']}>80% данных не используется производителями</div>
        </div>
    )
}

export default Percents;

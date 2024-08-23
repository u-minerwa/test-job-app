import React from "react";
import classes from './GranularText.module.css';

function GranularText() {
    return (
        <div className={classes.granularText}>
            <div className={classes.redRect}></div>
            <div className={classes.text}>Собираем и обрабатываем гранулярные данные на уровне сети</div>
        </div>
    )
}

export default GranularText;

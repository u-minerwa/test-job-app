import React from "react";
// import classes from './GranularText.module.css';
import classes from './GranularText.module.scss';

function GranularText() {
    return (
        <div className={classes['granular-text']}>
            <div className={classes['granular-text__red-rect']}></div>
            <div className={classes['granular-text__text']}>Собираем и обрабатываем гранулярные данные на уровне сети</div>
        </div>
    )
}

export default GranularText;

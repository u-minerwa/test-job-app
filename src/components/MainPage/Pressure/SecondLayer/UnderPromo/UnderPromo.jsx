import React from "react";
// import classes from './UnderPromo.module.css';
import classes from './UnderPromo.module.scss';
import LineChart from "./LineChart/LineChart";

function UnderPromo() {
    return (
        <div className={classes['under-promo']}>
            <div className={classes['under-promo__graphic']}>
                <LineChart />
            </div>
            <div className={classes['under-promo__button-why']}>
                <button type="button">Почему увеличивается?</button>
            </div>
        </div>
    )
}

export default UnderPromo;

import React from "react";
// import classes from './Rect3.module.css';
import classes from './Rect3.module.scss';

function Rect3() {
    return (
        <div className={classes.rect3}>
            <div className={classes['rect3__group']}>
                <div className={classes['rect3__group__red-circle']}>
                    <div className={classes['rect3__group__red-circle__style-svg']}>
                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3 9.25H25.9V3.7C25.9 1.65945 24.2406 0 22.2 0H14.8C12.7594 0 11.1 1.65945 11.1 3.7V12.95H3.7C1.65945 12.95 0 14.6095 0 16.65V33.3C0 33.7906 0.19491 34.2612 0.541852 34.6082C0.888795 34.9551 1.35935 35.15 1.85 35.15H35.15C35.6407 35.15 36.1112 34.9551 36.4581 34.6082C36.8051 34.2612 37 33.7906 37 33.3V12.95C37 10.9095 35.3405 9.25 33.3 9.25ZM3.7 16.65H11.1V31.45H3.7V16.65ZM14.8 14.8V3.7H22.2V31.45H14.8V14.8ZM33.3 31.45H25.9V12.95H33.3V31.45Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={classes['rect3__obr']}>Визуализация</div>
        </div>
    )
}

export default Rect3;

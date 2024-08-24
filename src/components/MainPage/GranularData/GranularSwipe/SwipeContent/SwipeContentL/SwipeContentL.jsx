import React from "react";
import classes from './SwipeContentL.module.css';

function SwipeContentL() {
    return (
        <div className={classes.contentL}>
            <div className={classes.cifra}>1</div>
            <div className={classes.textOnCifra}>Обработка данных</div>
            <div className={classes.redCircle}>
                <div className={classes.styleSvg}>
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.6 1.85C26.5401 1.85 24.05 4.3401 24.05 7.4C24.05 8.3287 24.3016 9.1908 24.7049 9.96225L22.6403 12.371C21.419 11.5414 19.9764 11.0985 18.5 11.1C17.1329 11.1 15.8637 11.4996 14.763 12.1471L12.1471 9.5312C12.6667 8.5959 12.9428 7.54494 12.95 6.475C12.95 2.9045 10.0455 0 6.475 0C2.9045 0 0 2.9045 0 6.475C0 10.0455 2.9045 12.95 6.475 12.95C7.58685 12.95 8.6173 12.6429 9.5312 12.1471L12.1471 14.763C11.4695 15.8923 11.1078 17.183 11.1 18.5C11.1 20.3444 11.803 22.0131 12.9222 23.3118L9.79205 26.442L9.8383 26.4883C9.08195 26.1063 8.24732 25.9049 7.4 25.9C4.3401 25.9 1.85 28.3901 1.85 31.45C1.85 34.5099 4.3401 37 7.4 37C10.4599 37 12.95 34.5099 12.95 31.45C12.95 30.5694 12.7262 29.7498 12.3617 29.0117L12.4079 29.058L16.0229 25.4431C16.8017 25.7206 17.6268 25.9 18.5 25.9C22.5811 25.9 25.9 22.5811 25.9 18.5C25.892 17.3508 25.6138 16.2196 25.0879 15.1978L27.4059 12.4931C28.0793 12.7854 28.8193 12.95 29.6 12.95C32.6599 12.95 35.15 10.4599 35.15 7.4C35.15 4.3401 32.6599 1.85 29.6 1.85ZM7.4 33.3C6.90935 33.3 6.4388 33.1051 6.09185 32.7581C5.74491 32.4112 5.55 31.9407 5.55 31.45C5.55 30.9594 5.74491 30.4888 6.09185 30.1419C6.4388 29.7949 6.90935 29.6 7.4 29.6C7.89065 29.6 8.36121 29.7949 8.70815 30.1419C9.05509 30.4888 9.25 30.9594 9.25 31.45C9.25 31.9407 9.05509 32.4112 8.70815 32.7581C8.36121 33.1051 7.89065 33.3 7.4 33.3ZM3.7 6.475C3.7 4.94505 4.94505 3.7 6.475 3.7C8.00495 3.7 9.25 4.94505 9.25 6.475C9.25 8.00495 8.00495 9.25 6.475 9.25C4.94505 9.25 3.7 8.00495 3.7 6.475ZM18.5 22.2C16.4594 22.2 14.8 20.5406 14.8 18.5C14.8 16.4594 16.4594 14.8 18.5 14.8C20.5406 14.8 22.2 16.4594 22.2 18.5C22.2 20.5406 20.5406 22.2 18.5 22.2ZM29.6 9.25C29.1094 9.25 28.6388 9.05509 28.2919 8.70815C27.9449 8.36121 27.75 7.89065 27.75 7.4C27.75 6.90935 27.9449 6.4388 28.2919 6.09185C28.6388 5.74491 29.1094 5.55 29.6 5.55C30.0907 5.55 30.5612 5.74491 30.9081 6.09185C31.2551 6.4388 31.45 6.90935 31.45 7.4C31.45 7.89065 31.2551 8.36121 30.9081 8.70815C30.5612 9.05509 30.0907 9.25 29.6 9.25Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SwipeContentL;


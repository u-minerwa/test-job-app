import React from 'react';
import classes from './DotsIndicatorM.module.css';

const DotsIndicatorM = ({ activeIndex }) => {
    return (
        <div className={classes.dotsContainer}>
            {[0, 1, 2].map(index => (
                <span
                    key={index}
                    className={`${classes.dot} ${activeIndex === index ? classes.active : ''}`}
                ></span>
            ))}
        </div>
    );
};

export default DotsIndicatorM;

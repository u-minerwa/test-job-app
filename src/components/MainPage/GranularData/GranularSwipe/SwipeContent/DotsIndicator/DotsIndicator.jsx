import React from 'react';
import classes from './DotsIndicator.module.css';

const DotsIndicator = ({ activeIndex }) => {
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

export default DotsIndicator;

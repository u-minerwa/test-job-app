import React from 'react';
// import classes from './DotsIndicator.module.css';
import classes from './DotsIndicator.module.scss';

const DotsIndicator = ({ activeIndex }) => {
    return (
        <div className={classes['dots-container']}>
            {[0, 1, 2].map(index => (
                <span
                    key={index}
                    className={`${classes['dots-container__dot']} ${activeIndex === index ? classes['dots-container--active'] : ''}`}
                ></span>
            ))}
        </div>
    );
};

export default DotsIndicator;

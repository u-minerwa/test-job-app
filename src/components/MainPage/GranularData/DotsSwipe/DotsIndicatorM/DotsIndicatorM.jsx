import React from 'react';
// import classes from './DotsIndicatorM.module.css';
import classes from './DotsIndicatorM.module.scss';

const DotsIndicatorM = ({ activeIndex }) => {
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

export default DotsIndicatorM;

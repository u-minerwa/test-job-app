import React from "react";
// import classes from './Volna.module.css';
import classes from './Volna.module.scss';

function Volna() {
    return (
        <div className={classes.volna}>
            <svg width="1920" height="160" viewBox="0 0 1920 160" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 44.6667L64 64C128 83.3333 256 121.667 384 108.667C512 96 640 32 768 16C896 0 1024 32 1152 32C1280 32 1408 0 1536 0C1664 0 1792 32 1856 48L1920 64V160H1856C1792 160 1664 160 1536 160C1408 160 1280 160 1152 160C1024 160 896 160 768 160C640 160 512 160 384 160C256 160 128 160 64 160H0V44.6667Z" fill="white" />
            </svg>
        </div>
    )
}

export default Volna;

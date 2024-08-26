import React, { useState } from "react";
// import classes from './GranularSwipe.module.css';
import classes from './GranularSwipe.module.scss';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipeContent from "./SwipeContent/SwipeContent";
import OvalsSvg from "./OvalsSvg/OvalsSvg";
import DotsSwipe from "../DotsSwipe/DotsSwipe";

function GranularSwipe() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={classes.swiper}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                mousewheel={{ enabled: true }}
                onSlideChange={(swiper) => { setActiveIndex(swiper.activeIndex); }}>
                <SwiperSlide> <SwipeContent /> </SwiperSlide>
                <SwiperSlide> <SwipeContent /> </SwiperSlide>
                <SwiperSlide> <SwipeContent /> </SwiperSlide>
            </Swiper>
            <OvalsSvg />
            <DotsSwipe activeIndex={activeIndex} />
        </div>
    );
}

export default GranularSwipe;

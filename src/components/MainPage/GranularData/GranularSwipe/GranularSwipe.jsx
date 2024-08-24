import React, { useState } from "react";
import classes from './GranularSwipe.module.css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import DotsIndicator from "./SwipeContent/DotsIndicator/DotsIndicator";
import DotsIndicatorM from "./SwipeContent/DotsIndicatorM/DotsIndicatorM";
import SwipeContent from "./SwipeContent/SwipeContent";
import OvalsSvg from "./OvalsSvg/OvalsSvg";

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
            <DotsIndicator activeIndex={activeIndex} />
            <DotsIndicatorM activeIndex={activeIndex} />
        </div>
    );
}

export default GranularSwipe;

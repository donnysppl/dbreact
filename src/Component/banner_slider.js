import React from 'react';
import { SwiperSlide } from "swiper/react";

const banner_slider = (props) => {
  return (
    <SwiperSlide key={props.id}><img src={props.imgsrc} alt="Banner_1" className="img-fluid"  /></SwiperSlide>
  )
}

export default banner_slider
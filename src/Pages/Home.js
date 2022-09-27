import React from 'react';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';
import Catagory from '../Component/catagory';

import catagory_data from '../data/catagory_data';

import Banner_1 from '../img/banner-1.jpg';
import Banner_2 from '../img/banner-2.jpg';
import Tile_img_1 from '../img/thom-home-tile-1.jpg';
import Tile_img_2 from '../img/thom-home-tile-2.jpg';
import Tile_img_3 from '../img/thom-home-tile-3.jpg';
import Tile_img_4 from '../img/thom-home-tile-4.jpg';
import Testimonial_1 from '../img/testimonial.jpg'

import ProductCard from '../Component/product_card';
import product_data from '../data/product_data';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import home.css
import "./css/home.css";

const Home = () => {

  
  // catagoryAll function
  function catagoryAll(val){
    return(
      <Catagory key={val.id} imgsrc={val.imgsrc} title={val.title} buyLink={val.buyLink}/>
    )
  }

  // product function
  function productAll(val){
    return(
      <SwiperSlide key={val.id}>
        <ProductCard classN={"col-md-12"} key={val.id} imgsrc={val.imgsrc} title={val.title} buyLink={val.buyLink} cate={val.cate}/>
      </SwiperSlide>
    )
  }

  return (
    <>
      <Header />

      {/* home page banner slider by swiperjs */}
      <section>
        <div className="container-fluid">
          <div className="row">

            <Swiper autoplay={{delay: 2500,disableOnInteraction: false,}} pagination={{dynamicBullets: true,}}  navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper" >
              <SwiperSlide><img src={Banner_1} alt="Banner_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Banner_2} alt="Banner_2" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Banner_1} alt="Banner_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Banner_2} alt="Banner_2" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Banner_1} alt="Banner_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Banner_2} alt="Banner_2" className="img-fluid"  /></SwiperSlide>
            </Swiper>

          </div>
        </div>
      </section>

      {/* THOMSON HOMES section */}

      <section className="ptb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="section-head-div text-center">
                <h2 className="section-heading">THOMSON HOMES</h2>
              </div>
            </div>
          </div>

          <div className="row pt-4">

            {catagory_data.map(catagoryAll)}            

          </div>
        </div>
      </section>


      {/*  */}
      <section className="ptb-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={Tile_img_1} alt="Tile_img_1" className="img-fluid" />
            </div>
            <div className="col-6">
              <img src={Tile_img_4} alt="Tile_img_2" className="img-fluid" />

              <div className="row pt-4 mt-1">
                <div className="col-6">
                  <img src={Tile_img_3} alt="Tile_img_3" className="img-fluid" />
                </div>
                <div className="col-6">
                  <img src={Tile_img_2} alt="Tile_img_4" className="img-fluid" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS section */}

      <section className="ptb-4 product-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="section-head-div text-center">
                <h2 className="section-heading">FEATURED PRODUCTS</h2>
              </div>
            </div>
          </div>

          <div className="row pt-4">

            {/* <ProductCard /> */}
            <Swiper slidesPerView={4} spaceBetween={30} autoplay={{delay: 2500,disableOnInteraction: false,}} modules={[Autoplay]} className="mySwiper" >
              {product_data.filter(prod_filt => prod_filt.feature === true ).map(productAll)} 
            </Swiper>
                  

          </div>
        </div>
      </section>

      {/* TESTIMONIALS section */}

      <section className="ptb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="section-head-div text-center">
                <h2 className="section-heading">TESTIMONIALS</h2>
              </div>
            </div>
          </div>

          <div className="row pt-4">

            <Swiper autoplay={{delay: 2500,disableOnInteraction: false,}} pagination={{dynamicBullets: true,}}  navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper" >
              <SwiperSlide><img src={Testimonial_1} alt="Testimonial_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Testimonial_1} alt="Testimonial_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Testimonial_1} alt="Testimonial_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Testimonial_1} alt="Testimonial_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Testimonial_1} alt="Testimonial_1" className="img-fluid"  /></SwiperSlide>
              <SwiperSlide><img src={Testimonial_1} alt="Testimonial_1" className="img-fluid"  /></SwiperSlide>
            </Swiper>

          </div>
        </div>
      </section>

  

      <Footer/>
    </>
  )
}

export default Home
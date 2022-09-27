import React,{ useState } from 'react';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';
// import ReactDOM from 'react-dom';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import product_img from '../img/product/product-1.jpg';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

const Product_detail = () => {

  const [bg, newbg] = useState("black");

  function textChange() {

    let val = bg;
    (val === "black") ? newbg("yellow") : newbg("black");

  }

  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <Header />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="product-slider">


           


              </div>
            </div>

            <div className="col-md-7 text-center pt-5 mt-5" style={{ backgroundColor: bg }}>
              <button className='btn btn-primary' onClick={textChange}>button text</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Product_detail
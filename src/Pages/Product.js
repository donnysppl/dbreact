import React from 'react';
// import ReactDOM from 'react-dom';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';
import ProductCard from '../Component/product_card';

// import product_img from '../img/product/product-1.jpg';

import product_data from '../data/product_data';

import './css/product.css'

const Product = () => {

  // let check = product_data.filter(fec => fec.feature === true )
  // console.log(check);

  function productAll(val){
    return(
      <ProductCard classN={"col-md-3 mb-5"} key={val.id} pageLink={val.id} imgsrc={val.imgsrc} title={val.title} buyLink={val.buyLink} cate={val.cate}/>
    )
  }

  return (
    <>

      <Header />
      
      <section className="ptb-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title text-center">
                Product
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className="container">
          <div className="row">

            {/* <ProductCard /> */}
            {product_data.map(productAll)}

          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Product
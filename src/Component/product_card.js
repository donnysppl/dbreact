import React from 'react';
// import { Link } from 'react-router-dom';

const product_card = (props) => {
    return (
        <>
            <div className={props.classN}>
                {/* <Link to={`/products/${props.id}`}> */}
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src={props.imgsrc} alt="" className="img-fluid" />
                        </div>
                        <div className="product-card-title">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="category">{props.cate}</p>
                        </div>
                        <div className="product-card-read-more">
                            <a href={props.link}>Read More</a>
                        </div>
                    </div>
                {/* </Link> */}
            </div>
        </>
    )
}

export default product_card
import React from 'react';
// import ReactDOM from 'react-dom';
import catg_1 from '../img/catg-1.jpg';

const catagory = (props) => {
    return (
        <>
            <div key={props.id} className="col-md-3">
                <div className="category-div text-center">
                    <div className="catg-img-div">
                        <img src={props.imgsrc} alt="catg_1" className="img-fluid" />
                    </div>
                    <div className="cate-text-div">
                        <h5>{props.title}</h5>
                        <a href={props.buyLink} className="btn btn-primary">View More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default catagory
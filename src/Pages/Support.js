import React from 'react';
import Header from '../Component/header/Header';
import Footer from '../Component/footer/Footer';

import './css/about.css'


const Support = () => {
  return (
    <>
      <Header />

      <section className="support-section ptb-5">
        <div className="container">
          <div className="col-md-11 mx-auto">
            <div className="row">
              <div className="row">
                <div className="col-md-6">
                  <div className="support-contact-part">
                    <h5>Support</h5>
                    <p>We’re happy to help you. In case of queries, kindly get in touch with us via the following options.</p>

                    <h5>Email</h5>
                    <p>Write to us at <a href="mailto:consumercare@thomsontv.in"> consumercare@thomsontv.in </a></p>

                    <h5>You can also call us</h5>
                    <p>Toll Free No: <a href="tel:18008438777"> 18008438777 </a></p>

                    <div>
                      <h6>BUSINESS HOURS</h6>
                      <h6>All Days: 9:30AM to 7PM</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="support-form-part">
                    <form action="">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Your name" />
                        <label htmlFor="floatingInput">Your name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Your email" />
                        <label htmlFor="floatingInput">Your email</label>
                      </div>
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea2"></textarea>
                        <label htmlFor="floatingTextarea2">Your message</label>
                      </div>
                      <div className="mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Support
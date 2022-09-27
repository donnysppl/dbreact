import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './footer.css';

const footer = () => {
  return (
    <>
      <footer className="text-center pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="footer-contact-div">
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link  to="/support">Support</Link>
                  </li>
                  <li>
                    <Link  to="/about">Download</Link>
                  </li>
                  <li>
                    <Link  to="/warranty-information">Warranty Information</Link>
                  </li>
                </ul>
                <div className="footer-logo">
                  <img src={logo} alt="footer logo" />
                </div>
                <ul>
                  <li>
                    <Link>Terms and Condition</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer
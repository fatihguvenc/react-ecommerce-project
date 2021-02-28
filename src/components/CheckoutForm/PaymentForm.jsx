import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Form.css'


const PaymentForm = () => {
  return(
    <div className="row py-5"> 
      <div className="col-11 col-sm-6 border mx-auto pt-4 wrapper">
        <h2>Payment Form</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <h4>Billing Information</h4>
          <div className="input-group">
            <div className="input-box">
              <input 
                type="text"
                placeholder="Your Name"
                required
                className="name"
              />
              <i className="fas fa-user icon"></i>
            </div>
            <div className="input-box">
              <input 
                type="text"
                placeholder="Your Lastname"
                required
                className="name"
              />
              <i className="fas fa-user icon"></i>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <input 
                type="email"
                placeholder="Your Email"
                required
                className="name"
              />
              <i className="fas fa-envelope icon"></i>
            </div>
          </div>

          <div className="input-group mt-4">
            <div className="input-box">
              <h4>Date Of Birth</h4>
              <input 
                type="text"
                placeholder="DD"
                required
                className="dob mx-1"
              />
              <input 
                type="text"
                placeholder="MM"
                required
                className="dob mx-1"
              />
              <input 
                type="text"
                placeholder="YYYY"
                required
                className="dob mx-1"
              />
            </div>
          </div>

          <div className="input-group mt-4">
            <div className="input-box">
              <h4>Payment Details</h4>
              <input 
                type="radio"
                checked
                className="radio"
                id="bc1"
                name="card"
              />
              <label htmlFor="bc1">
                <span>
                  <i className="fab fa-cc-visa"><span className="mx-2">Credit Card</span></i>
                </span>
              </label>
              <input 
                type="radio"
                className="radio"
                id="bc2"
                name="card"
              />
              <label htmlFor="bc2">
                <span>
                  <i className="fab fa-cc-paypal"><span className="mx-2">Paypal</span></i>
                </span>
              </label>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <input 
                type="tel"
                required
                className="name"
                placeholder="Your Card Number"
              />
              <i className="far fa-credit-card icon"></i>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <input 
                type="tel"
                required
                className="name"
                placeholder="Your Card CVC"
              />
              <i className="fas fa-user icon"></i>
            </div>
            <div className="input-box">
              <select>
                <option>01 June</option>
                <option>02 June</option>
                <option>03 June</option>
              </select>
              <select>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>
          </div>

          <div className="input-group my-4">
            <div className="input-box">
              <button type="submit">Pay Now</button>
            </div>
            <div className="input-box">
              <Link to="/addressform">
                <button type="submit">Back To Address Form</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default PaymentForm
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Form.css'

const AddressForm = () => {

  return(
    <div className="row py-5"> 
     <div className="col-9 col-sm-6 border mx-auto pt-4 wrapper">
      <h2>Address Form</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <h4>Address</h4>
          <div className="input-group">
            <div className="input-box">
              <input 
                type="text"
                placeholder="Your Name"
                required
                className="name"
                onChange={e => e.target.value}
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
            <div className="input-box">
              <input 
                type="email"
                placeholder="Your Email"
                required
                className="name"
              />
              <i className="fas fa-envelope icon"></i>
            </div>
            <div className="input-box">
              <input 
                type="tel"
                placeholder="Your Phone Number"
                required
                className="name"
              />
              <i className="fas fa-phone icon"></i>
            </div>
            <div className="input-box">
              <input 
                type="textarea"
                placeholder="Your Address"
                required
                className="name"
                col="50"
                row="50"
              />
            </div>
          </div>
          <div className="input-group my-4">
            <div className="input-box">
              <Link to="/paymentform">
                <button>SUBMIT</button>
              </Link>
            </div>
          </div>
          <div className="input-group my-4">
            <div className="input-box">
             <Link to="/cart">
              <button type="submit">Back To Cart</button>
             </Link>
            </div>
          </div>
        </form>
      </div>
    </div> 
  )
}

export default AddressForm
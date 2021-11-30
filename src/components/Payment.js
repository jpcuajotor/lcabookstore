import React from 'react';
import './Payment.css';
import {Link} from 'react-router-dom';



const Payment = () => {
    return (
        <div>
<form action="action">
        <h1>Checkout</h1>
        <h3>Billing address</h3>
        <div className="card-div">
            <div className="div1">
                <label for="name">First Name</label><br/>
                <input className="box4" type="text" name="name" id="name"/><br/>
            </div>
            <div className="div1">
                <label for="name">Last Name</label><br/>
                <input className="box4" type="text" name="name" id="name"/>
            </div>
        </div>
        <label for="email">Email</label><br/>
        <input className="box1" type="email" name="email" id="email" placeholder="Enter email"/><br/>
        <label for="email">Address</label><br/>
        <input className="box1" type="text" name="address1" id="address1" placeholder="1234 Rizal St." /><br/>
        <label for="email">Address 2</label><br/>
        <input className="box1" type="text" name="address2" id="address2" placeholder="Apartment or suite" /><br/>


        <div className="card-div">  
            <div className="div1">
                <label for="country">Country</label><br/>
                <select className="box3" name="province" id="province">
                    <option value="Choose">Choose...</option>
                    <option value="Cebu">Philippines</option>
                </select><br/>
            </div>
            <div className="div1">
                <label for="province">Province</label><br/>
                <select className="box3" name="province" id="province">
                    <option value="Choose">Choose...</option>
                    <option value="Cebu">Cebu</option>
                </select><br/>
            </div>
            <div className="div1">
                <label for="postal">Postal Code</label><br/>
                <input className="box3" type="text" name="cvc" id="postal" /><br/>
            </div>
        </div>


        <label for="cardnum">Card Number</label><br/>
        <input className="box1" type="text" name="number" id="number" placeholder="1234 1234 1234 1234"/><br/>
        
        <div className="card-div">  
            <div className="div1">
                <label for="cardex">Card expiry month</label><br/>
                <input className="box2" type="year" name="month" id="month" placeholder="MM"/><br/>
            </div>
            <div className="div1">
                <label for="cardye">Card expiry year</label><br/>
                <input className="box2" type="year" name="year" id="year" placeholder="YYYY"/><br/>
            </div>
            <div className="div1">
                <label for="cardCVC">Card CVC</label><br/>
                <input className="box2" type="cvc" name="cvc" id="cvc" placeholder="CVC"/><br/>
            </div>
        </div>
        <div className="btn-pos">
            <button className="btnPay" type="button"><Link to='/'>Pay Now</Link></button><br/>
        </div>
    </form>
        </div>
    )
}

export default Payment
import React, { useState } from "react";
import '../App.css';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
 
const Brochure = ({onBrochur})=> {
    const [value, setValue] = useState()
    return(
        <div className="notification-con ver-order">
            <div className="brochure-box flex-start-order">
                <h1 className="brochure-heading">Download Brochure</h1>
                <div className="hor-order">
                    <div className="ver-order icons-con">
                        <p className="icons-names" style={{fontWeight: "600", fontSize: "15px"}}>We Promise</p>
                        <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683107965/customer-service_x7q58a.png" height={50} width={50} alt="" />
                        <span className="icons-names">Instant Callback</span>
                        <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683107965/car-insurance_qjhx7e.png" height={50} width={50} alt="" />
                        <span className="icons-names">Free Site Visit</span>
                        <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683108135/cash-payment_sxo1yx.png" height={50} width={50} alt="" />
                        <span className="icons-names">Unmatched Price</span>
                    </div>
                    <div>
                        <i id="cross-icon" className="fa fa-close" style={{fontSize:"20px", left:"265px"}} onClick={()=>onBrochur()}></i>
                        <p className="icons-names">Register Here And Avail The <span style={{color:"blue"}}>Best Offers!!</span></p>
                        <input type="text" placeholder="Name" className="input-field brochure-field" style={{marginRight:"50px"}} />                
                        <PhoneInput 
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            value={value}
                            onChange={setValue}
                            className="input-field brochure-field"
                            style={{width:"80%"}}
                        />                
                        <input type="text" placeholder="Email Id" className="input-field brochure-field" />
                        <textarea type="text" placeholder="Comment" className="input-field brochure-field" />
                        <button className="call-btn download-btn">Download Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Brochure;
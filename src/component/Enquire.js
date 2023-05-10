import React, { useState } from "react";
import '../App.css';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
 
const Enquire = ({ setEnquireBox, contant})=> {
    const [value, setValue] = useState();
    
    const getCon = (e) => {
        if (e.target.id === "P"){
            setEnquireBox("none")
        };
    };
    
    return(
        <div id="P" className="notification-con ver-order" onClick={(e)=>getCon(e)}>
            <div id="C" className="brochure-box flex-start-order" onClick={(e)=>getCon(e)}>
                <h1 className="brochure-heading">{contant != undefined ? contant.heading:""}<i id="mobile-cross-icon" className="fa fa-close" onClick={()=>setEnquireBox("none")}></i></h1>
                <div className="hor-order" style={{width:"100%"}}>
                    <div className="ver-order icons-con">
                        <p className="icons-names" style={{fontWeight: "600", fontSize: "15px"}}>We Promise</p>
                        <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683623547/customer-service_nguepl.png" height={50} width={50} alt="" />
                        <span className="icons-names">Instant Callback</span>
                        <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683623547/car-insurance_iqkvkj.png" height={50} width={50} alt="" />
                        <span className="icons-names">Free Site Visit</span>
                        <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683623547/save-money_uihiuk.png" height={50} width={50} alt="" />
                        <span className="icons-names">Unmatched Price</span>
                    </div>
                    <div className="enquire-details-con">
                        <p className="icons-names">Register Here And Avail The <span style={{color:"blue"}}>Best Offers!!</span></p>
                        <input type="text" placeholder="Name" className="input-field brochure-field" />                
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
                        <button className="call-btn download-btn">{contant != undefined ? contant.button:""}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Enquire;
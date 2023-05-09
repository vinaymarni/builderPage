import React, { useState } from "react";
import '../App.css'

import Enquire from '../component/Enquire';

const SideBar = () => {
    const [contant, setContant] = useState({heading:"", button:""});
    const [enquireBox, setEnquireBox] = useState("none");

    const onBrochur = () => {
        setContant({heading:"Download Brochure", button:"Download Brochure"});
        setEnquireBox("flex")
    };     

    return(
        <div className="sidebar-main-con flex-start-order fixed-right">
            <div className="ver-order fixed-top" style={{display: enquireBox}}>
                <Enquire setEnquireBox={setEnquireBox} contant={contant} />
            </div>
            <div className="btns-con flex-start-order">
                <div className="hor-order">
                    <button className="visit-btn">Organize Visit</button>
                    <a href="https://api.whatsapp.com/send?phone=+919785061492">
                    <button className="visit-btn visit-left-btn hor-order"><i className="fa fa-whatsapp" style={{color: "green", fontSize:"23px", marginRight:"10px"}}></i> 9988776655</button>
                    </a>
                </div>
                <p className="para">Request a Call</p>
                <button className="call-btn hor-order"><i className="fa fa-phone" style={{color: "white", fontSize:"25px", marginRight:"7px"}}></i>Call Back Now</button>
            </div>
            <h2 className="Pre-Rigester-heading">Pre-Rigester here for Best Offers</h2>
            <input type="text" placeholder="Name" className="input-field" />
            <input type="text" placeholder="Mobile Number" className="input-field" />
            <input type="text" placeholder="E mail Id" className="input-field" />
            <button className="call-btn hor-order" style={{marginTop:"20px"}}>Pre Rigester Now</button>
            <p className="para" style={{marginTop:"70px"}}>For more Information:</p>
            <button className="Brochure-btn" onClick={()=>onBrochur()}>Download Brochure</button>
        </div>
    )
};

export default SideBar;
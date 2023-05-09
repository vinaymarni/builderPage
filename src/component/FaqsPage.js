import React, { useState } from "react";
import '../App.css';

import {faqData} from '../component/commonData';

let show = false;

const FaqsPage = ({onBoxesClick})=> {
    const onQuesClick =(ind) => {
        let arrowId = `arrow${ind}`;
        let answerId = `answer${ind}`;
        let answerEl = document.getElementById(answerId);
        let arrowEl = document.getElementById(arrowId);
        show = !show;
        if(show === true){ 
            answerEl.style.display = "";
            arrowEl.className = "fa fa-angle-down";
         }else{
            answerEl.style.display = "none";
            arrowEl.className = "fa fa-angle-right";
         } 
    };

    return(
        <div>
            <span className="faqs-heading">Frequently Asked Questions</span>
            <p className="faqs-content">Questions you might asked about our products and services</p>
            <hr className="horline-faq" />
            <div className="questions-con">
                {faqData.map((each,ind)=>{
                    return(
                        <div className="QABox" key={ind}>
                            <div id={ind} className="space-between-order question-box" onClick={()=>onQuesClick(ind)}>
                                <div>
                                    <p className="question">{each.qusetion}</p>
                                    <span id={`answer${ind}`} style={{display: "none"}} className="answer">{each.answer}</span>
                                </div>
                                <i id={`arrow${ind}`} style={{fontSize: "23px", color:"gray", margin:"15PX"}} className="fa fa-angle-right"></i>
                            </div>
                            <hr className="horline-faq" />
                        </div>
                    )
                })}
            </div>
            <h2 className="faqs-heading">Still have Questions?</h2>
            <p>Can't fing the answer your looking for? Please contact with our Customer Service.</p>
            <button className="price-breakup-btn contact-us-btn" onClick={()=>onBoxesClick("CONTACT")}>Contact Us</button>
        </div>
    )
};

export default FaqsPage;
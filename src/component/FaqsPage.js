import React, { useState } from "react";
import '../App.css';

const faqData = [
    {
        qusetion: "How long can i enjoy free trail service?",
        answer: "You can enjoy your free trail for 12 months long after that we charge based on your usage tire."
    },
    {
        qusetion: "Do i need to add any credit card to get free trail service?",
        answer: "You can enjoy your free trail for 12 months long after that we charge based on your usage tire."
    },
    {
        qusetion: "What is the package cancellation process?",
        answer: "You can enjoy your free trail for 12 months long after that we charge based on your usage tire."
    },
    {
        qusetion: "Is there any hidden charge beside the main price?",
        answer: "You can enjoy your free trail for 12 months long after that we charge based on your usage tire."
    },
    {
        qusetion: "Is there any extra fee to pay for outside US citizen?",
        answer: "You can enjoy your free trail for 12 months long after that we charge based on your usage tire."
    },
];

let show = false;

const FaqsPage = ()=> {

    const onQuesClick =(ind) => {
        console.log(ind);
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
            <p style={{marginBottom:"30px"}}>Questions you might asked about our products and services</p>
            <hr className="horline-faq" />
            <div className="questions-con">
                {faqData.map((each,ind)=>{
                    return(
                        <div className="QABox" key={ind}>
                            <div id={ind} className="space-between-order"  onClick={()=>onQuesClick(ind)}>
                                <div>
                                    <p className="question">{each.qusetion}</p>
                                    <span id={`answer${ind}`} style={{display: "none"}} className="answer">{each.answer}</span>
                                </div>
                                <i id={`arrow${ind}`} style={{fontSize: "25px", color:"gray", marginRight:"20PX"}} className="fa fa-angle-right"></i>
                            </div>
                            <hr className="horline-faq" />
                        </div>
                    )
                })}
            </div>
            <h2 className="faqs-heading">Still have Questions?</h2>
            <p>Can't fing the answer your looking for? Please contact with our Customer Service.</p>
            <button className="price-breakup-btn" style={{padding: "5px", paddingLeft:"15px", paddingRight:"15px", marginTop:"20px"}}>Contact Us</button>
        </div>
    )
};

export default FaqsPage;
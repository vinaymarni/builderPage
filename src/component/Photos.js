import React, { useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css'

import {propertiesImages} from '../component/commonData';

import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const Photos = ({setPhotosBox}) => {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= propertiesImages.length) {
            setLoading(false);
        };
    };
    return(
        <div className="notification-con gallery-mobile-con ver-order">
            <i id="photos-cross-icon" className="fa fa-close" onClick={()=>setPhotosBox("none")}></i>     
            <div className="main-photos-con">             
                <Loader size="md" content="Loading..."  style={{display: loading ? "block" : "none", margin: "10%"}}/>      
                <div className="images-con ver-order" style={{display: loading ? "none" : "block"}}>
                        <Carousel  showArrows={true}>   
                            {
                                propertiesImages.map((each, ind)=>{
                                    return(
                                        <div key={ind} className="gallery-con">
                                            <img alt="" className="propertyImages" src={each}  onLoad={imageLoaded} />    
                                        </div>           
                                    )
                                })
                            }                                       
                        </Carousel>
                </div>             
            </div>
        </div>
    )
};

export default Photos;
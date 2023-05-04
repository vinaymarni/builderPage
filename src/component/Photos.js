import React, { useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css'

import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const imagesData = [
    "https://ik.imagekit.io/flashaway/thumb_large_61bf0818-3497-4c2d-b45b-4b1223964805.jpg",
    "https://mediacdn.99acres.com/media1/20954/4/419084678T-1682062178266.jpg",
    "https://mediacdn.99acres.com/media1/20166/17/403337696M-1674412647056.jpg",
    "https://is1-2.housingcdn.com/01c16c28/a34012546173219a769fd88bbb27cc9d/v0/medium/2_bhk_apartment-for-sale-dhanwantary_nagar-Jabalpur-others.jpg",
    "https://newprojects.99acres.com/projects/sri_anantha_developers/sri_anantha_sri_kamakshi_residency/images/57f299v2.jpg",
    "https://newprojects.99acres.com/projects/e_team_projects/e_irene/images/p7ww67hm.jpg",
    "https://propertyadviser.in/property-images/s1/eternal-group-2558-s1.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1675775763/B85_B90___Building_Bloc_design_dragpq.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1675775775/Gallery_of_Iron_Maiden_House_by_CplusC_Architectural_Workshop___TLP_aaf0bi.jpg",
];

const Photos = ({onPhotos}) => {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= imagesData.length) {
            setLoading(false);
        };
    };
    return(
        <div className="notification-con ver-order">
            <i id="photos-cross-icon" className="fa fa-close" style={{fontSize:"40px" }} onClick={()=>onPhotos()}></i>     
            <div className="ver-order main-photos-con">  
                <Loader size="md" content="Loading..."  style={{display: loading ? "block" : "none", margin: "10%"}}/>      
                <div className="images-con ver-order" style={{display: loading ? "none" : "block"}}>
                    <Carousel  showArrows={true}>   
                        {
                            imagesData.map((each, ind)=>{
                                return(
                                    <div style={{height:"70vh", width:"100%", marginTop:"30px"}}>
                                        <img key={ind} alt="" className="propertyImages" src={each}  onLoad={imageLoaded} />    
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
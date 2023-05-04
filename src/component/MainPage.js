import React, { useState } from "react";
import '../App.css'
import {amenitiesList} from '../component/commonData';
import FaqsPage from '../component/FaqsPage';

const propDetails = [
    { type:"2 BHK",
      super_area: "1276 Sq.Ft",
      price:"1.3 Cr* Onwords"
    },
    { type:"3 BHK",
      super_area: "1876 Sq.Ft",
      price:"3 Cr* Onwords"
    },
    { type:"2.5 BHK",
      super_area: "1266 Sq.Ft",
      price:"3.2 Cr* Onwords"
    },
    { type:"4 BHK",
      super_area: "1366 Sq.Ft",
      price:"4 Cr* Onwords"
    },
    { type:"4.5 BHK",
      super_area: "1360 Sq.Ft",
      price:"4.2 Cr* Onwords"
    },
];

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

const localitiesData = [
    "Kundanahalli Signel",
    "Outer Ring Road",
    "International School",
    "JS Nagar",
    "RK Road",
    "Market Road",
    "Marthahalli Road",
    "vartur Kodi"
]

const propertiesImages = [
    "https://thumbs.dreamstime.com/z/modern-real-estate-house-building-city-construction-concept-evening-outdoor-urban-view-homes-40083842.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1675775784/Fence_House_maison_contemporaine_%C3%A0_Pozna%C5%84_en_Pologne_par_mode_lina_-_Journal_du_Design_oizqrk.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1675775775/Gallery_of_Iron_Maiden_House_by_CplusC_Architectural_Workshop___TLP_aaf0bi.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1675775763/B85_B90___Building_Bloc_design_dragpq.jpg",
];

let isMenu = false

const MainPage = ({onBrochur, onEnquire, onPhotos}) => {
    const [boxes, setBoxes] = useState({box1:"flex", box2:"none", box3:"none", box4:"none"});
    const [location, setLocation] = useState({mapBox:"flex", locationBox:"none"})
    const [menuBar, setMenuBar] = useState("none")

    const onLocationSelect = ( name ) => {
        switch(name){
            case "M":
                setLocation({mapBox:"flex", locationBox:"none"});
                break
            case "L":
                setLocation({mapBox:"none", locationBox:"flex"});
                break
        };
    };

    const onMenu = ()=>{
        isMenu = !isMenu;
        isMenu ? setMenuBar("flex") : setMenuBar("none");
    }

    return(
        <div className="mainbar-main-con flex-start-order fixed-left">
{/* For Desktop */}
            <nav className="nav-bar fixed-top space-between-order">
                <div className="hor-order">
                    <img src="https://havishaa.com/wp-content/uploads/Shoba-Dream-Acres-Logo.png" style={{marginRight:"10px"}} alt="" height={50} width={90} />
                </div>
                <hr className="vl" />
                <a href="#home">
                        <div className="nav-items">
                            <i id="nav-icon" className="fa fa-home"></i>
                        </div>
                </a>
                <hr className="vl" />
                <a href="#over_view">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/file_aoiw0k.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Overview</span>                   
                        </div>
                </a>
                <hr className="vl" />
                <a href="#price">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683097793/money_dj2oor.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Price</span>
                        </div>
                </a>
                <hr className="vl" />
                <a href="#gallery">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683138363/image-gallery_bqrpxj.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Gallery</span>
                        </div>
                </a>
                <hr className="vl" />
                <a href="#amenities">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/wi-fi_lxwr5z.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Amenities</span>
                        </div>
                </a>
                <hr className="vl" />
                <a href="#location">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/location_jd7mfh.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Location</span>             
                        </div>
                </a>
                <hr className="vl" />
                <a href="#virtual_site_tour">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/youtube_gypy4f.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Virtual Site Tour</span>                    
                        </div>
                </a>
                <a href="#about">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683185255/about_rfsk1k.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>About</span>                    
                        </div>
                </a>
                <a href="#FAQs">
                        <div className="nav-items hor-order">
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683185255/question-mark-draw_xzqlx4.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>FAQs</span>                    
                        </div>
                </a>
                
                <hr className="vl" />
                <div className="nav-items hor-order" onClick={()=>onBrochur()}>
                        <i class="fa fa-download" style={{fontSize:"13px"}}></i>
                        <span style={{marginLeft:"5px"}}>Brochure</span>
                </div>
                <hr className="vl" />
                <div className="nav-items hor-order" onClick={()=>onEnquire()}>
                        <i className="fa fa-envelope" style={{fontSize: "13px"}}></i>
                        <span style={{marginLeft:"5px"}}>Enquire</span>
                </div>
            </nav>
{/* For Mobile */}
            <nav className="mobile-nav-bar fixed-top space-between-order">
                <img src="https://havishaa.com/wp-content/uploads/Shoba-Dream-Acres-Logo.png" alt="" height={50} width={90} />
                <img className="menu-icon" src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png" onClick={onMenu} alt=""/>
                <div style={{display: menuBar}} className="menu-options-con flex-start-order">
                    <a href="#home">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <i id="nav-icon" className="fa fa-home"></i>
                            <span>Home</span>  
                        </div>
                    </a>
                    <a href="#over_view">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/file_aoiw0k.png" alt="" height={13} width={13} />
                            <span>Overview</span>                   
                        </div>
                    </a>
                    <a href="#price">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683097793/money_dj2oor.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Price</span>
                        </div>
                    </a>
                    <a href="#gallery">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683138363/image-gallery_bqrpxj.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Gallery</span>
                        </div>
                    </a>
                    <a href="#amenities">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/wi-fi_lxwr5z.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Amenities</span>
                        </div>
                    </a>
                    <a href="#location">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/location_jd7mfh.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Location</span>             
                        </div>
                    </a>
                    <a href="#virtual_site_tour">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683098416/youtube_gypy4f.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>Virtual Site Tour</span>                    
                        </div>
                    </a>
                    <a href="#about">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683185255/about_rfsk1k.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>About</span>                    
                        </div>
                    </a>
                    <a href="#FAQs">
                        <div className="nav-items hor-order" onClick={onMenu}>
                            <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1683185255/question-mark-draw_xzqlx4.png" alt="" height={13} width={13} />
                            <span style={{marginLeft:"5px"}}>FAQs</span>                    
                        </div>
                    </a>                   
                    <div className="nav-items hor-order" onClick={()=>onBrochur()}>
                        <i class="fa fa-download" style={{fontSize:"13px"}}></i>
                        <span style={{marginLeft:"5px"}}>Brochure</span>
                    </div>
                    <div className="nav-items hor-order" onClick={()=>onEnquire()}>
                        <i className="fa fa-envelope" style={{fontSize: "13px"}}></i>
                        <span style={{marginLeft:"5px"}}>Enquire</span>
                    </div>
                </div>
            </nav>

            <div id="home">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {propertiesImages.map((eachPhoto, ind)=>{
                        return(
                            ind === 0 ?                 
                            <div key={ind} className="carousel-item active">
                                <img src={eachPhoto} style={{width:"74.5vw", height:"650px", marginTop:"60px"}} className="property-images" alt="..."/>
                            </div>
                            :
                            <div key={ind} className="carousel-item">
                                <img src={eachPhoto} style={{width:"74.5vw", height:"650px", marginTop:"60px"}} className="property-images" alt="..."/>  
                            </div>  
                                                               
                        )
                        })}                                 
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> 
            </div>
            <div className="more-details-box ver-order">
                <h2 className="more-details-heading">SIGNATURE TOWERS</h2>
                <h3 className="more-details-content">At Borewell Rd. Whitefield</h3>
                <p className="more-details-content" style={{fontSize:"12px"}}>By SOBHA DREAMS</p>
                <div className="more-detail-inner ver-order">
                    <span className="ul-items">Land Parcel : <span> 17 Acres</span></span>
                    <span className="ul-items">Floors : <span> G+19 Storeys</span></span>
                    <span className="ul-items">Possession : <span> April 2026</span></span>
                </div>
                <div className="alert-msg hor-order alert-style-top">NEW LAUNCH AT WHITEFIELD</div>
                <div className="alert-msg hor-order">LAKE FACING APARTMENTS</div>
                <div className="alert-msg hor-order">*100% Vastu Homes</div>
                <div className="alert-msg hor-order alert-style-bottom">Exciting Payment Plans</div>
                <span className="more-details-heading" style={{fontSize:"20px"}}>Luxurious 2.5, 3, 3.5, 4 & 4.5 BHK</span>
                <span className="more-details-heading" style={{fontSize:"20px", marginTop:"0px"}}>Starting Price</span>

                <h1 className="more-details-heading" style={{marginTop:"0px", fontSize:"20px"}}> 1.65 Cr* Onwards</h1>
                <button className="call-btn" style={{marginTop:"0px"}}>Enquire Now</button>
            </div>          
            <div>
                <div id="over_view" className="details-con">
                    <h1 className="sobha-heading">Overview</h1>
                    <h1 className="mobile-sobha-heading">Overview</h1>
                    <h1 className="main-heading">Sobha Dream Acres</h1>
                    <p className="main-heading" style={{fontSize:"20px"}}>10 Mins Drive From Penathur Chroma Road</p>
                    <p>Sobha Realty is an international luxury developer committed to redefining the art of living through sustainable communities. Established in 1976 as an interior decoration firm in Oman by PNC Menon – a visionary entrepreneur, the company has grown its presence with developments and investments in the UAE, Oman, Bahrain, Brunei and India.</p>
                    <p>They have achieved growth with backward integration in the construction and real estate development business in India.[8] Their long-term performance has been supported by the in-house production of construction items and furniture. The company has a geographic presence in 27 cities in 14 states.[9] Internationally, Sobha Ltd has operations running in Oman and Dubai[10][11][12] as Sobha Realty</p>
                    <button className="Brochure-btn">Download Brochure</button>
                </div>
                <div id="price" className="details-con">
                <h1 className="sobha-heading">Price</h1>     
                <h1 className="mobile-sobha-heading">Price</h1>              
                <div className="hor-order mobile-price-con">
                    <div className="table">
                        <div className="hor-order table-row">
                            <div className="type-box new-order" style={{color:"rgb(64, 64, 169)"}}>Type</div>
                            <div className="super-area-box new-order" style={{color:"rgb(64, 64, 169)"}}>Super Built-up Area</div>
                            <div className="price-box new-order" style={{color:"rgb(64, 64, 169)"}}>Price</div>
                        </div>
                        {propDetails.map((each, ind)=>{
                            let odd = ind % 2 === 0;
                            return(
                                <div key={ind} style={{ backgroundColor: odd ? "rgb(222, 220, 220)" : "" }} className="hor-order table-row">
                                    <div className="type-box new-order">{each.type}</div>
                                    <div className="super-area-box new-order">{each.super_area}</div>
                                    <div className="price-box space-between-order">
                                        {each.price}
                                        <button className="price-breakup-btn">Price Breakup</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="price-details-box">
                        <div style={{height:"150px", width:"200px", border: "1px solid gray"}}><img src="https://shiny.rstudio.com/images/datatable.png" height={150} width={200} alt="" /></div>
                        <button className="price-breakup-btn costing-btn">Complete Costing Details</button>
                    </div>
                </div>
                </div>
                <div id="gallery" className="details-con">
                <h1 className="sobha-heading">Gallery</h1>
                <h1 className="mobile-sobha-heading">Gallery</h1>
                    {imagesData.map((each, ind)=>{
                        return(
                            <img key={ind} src={each} onClick={()=>onPhotos()} alt="" className="gallery-imgs" />
                        )
                    })}
                </div>
                <div id="specifications" className="details-con">
                    <h1 className="sobha-heading">Specifications</h1>
                    <h1 className="mobile-sobha-heading">Specifications</h1>
                    <h2 className="bhk-unit-heading">*For 2 BHK units Only</h2>
                    <div className="bhk-unit-content-box">
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Structure -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Car Parking -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Living/Dining/Kitchen -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Electrical & Power Backup -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Bedrooms -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Toilets -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Balconies/Utilities -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Staircase -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Common Areas -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Joinery -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">lifts -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Land Scape -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Common Facilities -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>                   
                    </div>
                    <h2 className="bhk-unit-heading" style={{marginTop:"25px"}}>*For 1 BHK units Only</h2>
                    <div className="bhk-unit-content-box">
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Structure -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Car Parking -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Living/Dining/Kitchen -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Electrical & Power Backup -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Bedrooms -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Toilets -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Balconies/Utilities -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Staircase -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Common Areas -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Joinery -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">lifts -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Land Scape -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>
                        <div className="bhk-unit-each-box">
                            <p className="bhk-unit-para"><span className="bhk-unit-span">Common Facilities -</span> Basement +Ground+13 Storied R C C Structure</p>
                        </div>                   
                    </div>
                </div>
                <div id="amenities" className="details-con">
                    <h1 className="sobha-heading">Amenities</h1>
                    <h1 className="mobile-sobha-heading">Amenities</h1>
                    <div className="aminities-display-con">
                        {amenitiesList.map((each, ind)=>{
                            return(
                                <div className="ver-order aminity-box">
                                    <img key={ind} src={each.url} alt="" className="amenity-icon" />
                                    <p className="amenity-name">{each.name}</p>
                                </div>
                            )
                        })}
                    </div>    
                </div>
                <div id="master_plan" className="details-con">
                    <h1 className="sobha-heading">Master Plan</h1>
                    <h1 className="mobile-sobha-heading">Master Plan</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lochaber_Centre_Site_Plan.jpg/640px-Lochaber_Centre_Site_Plan.jpg" alt="" className="master-plan" />
                </div>
                <div id="location" className="details-con">
                    <h1 className="sobha-heading">Location</h1>
                    <h1 className="mobile-sobha-heading">Location</h1>
                    <div className="hor-order">
                        <button className="prop-select-btns" onClick={()=>onLocationSelect("M")}>Map View</button>
                        <button className="prop-select-btns" onClick={()=>onLocationSelect("L")}>Location Map</button>
                    </div>
                    <div className="ver-order" style={{display: location.mapBox}}>
                        <div className="ver-order" style={{marginTop:"20px"}}>
                            <img src="https://www.shutterstock.com/image-vector/city-map-any-kind-digital-260nw-2021574014.jpg" alt="" className="map-box" />
                        </div>
                    </div>
                    <div className="ver-order" style={{display: location.locationBox, marginTop:"20px"}}>
                        <img src="https://thumb.cadbull.com/img/product_img/original/urban_area_street_map_and_planning_cad_drawing_details_dwg_file_29052019051302.png" alt="" className="map-box" />
                    </div>
                    <div className="new-order localities-box" style={{marginLeft:"20px", marginTop:"20px"}}>
                        {localitiesData.map((each, ind)=>{
                            return(
                                <p key={ind} className="para localities"><img alt="" src="https://res.cloudinary.com/di01osmzz/image/upload/v1683127122/location_1_aj4ola.png" style={{height:"20px",width:"20px", marginRight:"10px"}}/>{each}<span> - 15 Mins</span></p>
                            )
                        })}
                    </div>
                </div>
                <div id="virtual_site_tour" className="details-con">
                    <h1 className="sobha-heading">Virtual Site Tour</h1>
                    <h1 className="mobile-sobha-heading">Virtual Site Tour</h1>
                    <video className="VideoInput_video" controls>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"  type="video/mp4"/>
                    </video>
                </div>
                <div id="about" className="details-con">
                    <h1 className="sobha-heading">About</h1>
                    <h1 className="mobile-sobha-heading">About</h1>
                    <h2 className="about-sobha">About Sobha Dream Acres</h2>
                    <p>They have achieved growth with backward integration in the construction and real estate development business in India.[8] Their long-term performance has been supported by the in-house production of construction items and furniture. The company has a geographic presence in 27 cities in 14 states.[9] Internationally, Sobha Ltd has operations running in Oman and Dubai[10][11][12] as Sobha Realty</p>
                </div>
                <div id="FAQs" className="details-con">
                    <h1 className="sobha-heading">FAQs</h1>
                    <h1 className="mobile-sobha-heading">FAQs</h1>
                    <FaqsPage />
                </div>
                <div className="footer ver-order">
                    <img src="https://havishaa.com/wp-content/uploads/Shoba-Dream-Acres-Logo.png" alt="" className="footer-logo" />
                    <p style={{fontSize:"12px"}}>This site is for information purpose only and should not be treated as the official information.</p>
                    <span style={{fontSize:"12px", color:"blue"}}>Disclaimer & Privacy Policy</span>
                </div>
            </div>

            
        </div>
    )
};

export default MainPage;
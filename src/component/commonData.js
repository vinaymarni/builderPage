const amenitiesList = [
    {name:"24 Hours Water Supply", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982230/save-water_ajo2uw.png"},
    {name:"Power Back Up", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982230/generator_isy82u.png"},
    {name:"Security", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982230/policeman_bys8gh.png"},
    {name:"Rain Water Harvesting", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982230/rainwater_ohfise.png"},
    {name:"Club House", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982230/barcelona_q3vjxw.png"},
    {name:"Swimming Pool", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681983989/swimming-pool_1_mwxxej.png"},
    {name:"Private pool", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982230/swimming-pool_bez5fn.png"},
    {name:"Park", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/park_hs8bum.png"},
    {name:"Jogging and Strolling Track", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/running_kdiv4h.png"},
    {name:"Outdoor Tennis Courts", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/court_n8h84u.png"},
    {name:"Reserved Parking", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/reserved_raozm2.png"},
    {name:"Visitor Parking", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/arrow_mebogl.png"},
    {name:"Intercom Facility", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/service_xtmu01.png"},
    {name:"Maintenance Staff", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/teamwork_vdsx09.png"},
    {name:"Bank & ATM", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/banking_jp6vmf.png"},
    {name:"Gymnasium", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/treadmill_zakr2i.png"},
    {name:"Indoor Games Room", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/futsal_fsaaw7.png"},
    {name:"Flower Gardens", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/gardening_uurz69.png"},
    {name:"Library And Business Centre", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/library_soy6yf.png"},
    {name:"Piped Gas", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/pipe_nf7uii.png"},
    {name:"Rentable Community Space", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/community_ilhukr.png"},
    {name:"Indoor Squash & Badminton Courts", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/badminton-court_nkjzb5.png"},
    {name:"Multipurpose Courts", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/badminton-court_nkjzb5.png"},
    {name:"Meditation Area", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/meditation_xj2ajw.png"},
    {name:"Internet/Wi-Fi Connectivity", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/wifi_nzrre8.png"},
    {name:"AC in each room", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/air-conditioner_updrtr.png"},
    {name:"Theme based Architectures", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/model_qqufmx.png"},
    {name:"Health club with Steam / Jaccuzi", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/healthcare_ubncig.png"},
    {name:"Large Open space", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/park_1_vwr2cw.png"},
    {name:"Grand Entrance lobby", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/gate_bcbvcc.png"},
    {name:"Multipurpose Hall", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/conference_qimubj.png"},
    {name:"Horticulture", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/horticulture_qdtonc.png"},
    {name:"Event Space & Amphitheatre", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/event_mnznzb.png"},
    {name:"Fire Fighting Equipment", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/firefighting_or9fh7.png"},
  ];

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

const specificationsData = [
    {
        heading:"Structure -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Car Parking -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Living/Dining/Kitchen -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Electrical & Power Backup -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Bedrooms -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Toilets -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Balconies/Utilities -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Staircase -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Common Areas -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Joinery -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"lifts -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Land Scapes -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
    {
        heading:"Common Facilities -",
        content:" Basement +Ground+13 Storied R C C Structure"
    },
];

  export {amenitiesList, propDetails, imagesData, localitiesData, propertiesImages, specificationsData};
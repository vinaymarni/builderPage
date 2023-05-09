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

const localitiesData = [
    "Whitefield - 0 km | 0 mins",
    "KP Puram - 5 km | 14 mins",
    "Varthur Police Station - 8.8 km | 20 mins",
    "Forum Value Mall - 6.3 km | 14 mins",
    "Dmart - 6.1 kms | 15 mins",
    "ITPL - 3.2 km | 7 mins",
    "Marathahalli - 7.1 km | 17 mins",
]

const propertiesImages = [
    "https://res.cloudinary.com/di01osmzz/image/upload/v1683544519/sumadhura-folium-1_q4wwmo.png",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1683544518/sumadhura-folium-5_nn9wdk.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1683544518/sumadhura-folium-6_butysm.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1683544517/sumadhura-folium-2_cdrdop.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1683544517/sumadhura-folium-4_tjw8ee.jpg",
    "https://res.cloudinary.com/di01osmzz/image/upload/v1683544517/sumadhura-folium-3_ah8un7.jpg"
];

const specificationsData = [
    {
        heading:"Doors:", 
        content:`Main doors: Best quality teak wood frame of large 8 feet high with veneered flush shutter of 38 mm thickness, P.U polish finished on both sides.\nInternal doors: Engineered hard wood frame with veneered flush shutters of 38 mm thick P.U polish finished on both sides.
        Toilet & Utility doors: Engineered hard wood frame with veneered flush shutters of 38 mm thick, P.U. polish finish on one side and laminate finish on the other side.
        Balconies: UPVC french doors with sliding glass shutters & provision for mosquito mesh of aluplast or equivalent brand/make.
        Windows: UPVC window systems with M.S safety grill and provision for mosquito mesh of aluplast or equivalent brand/make. All hardware of reputed make.
        External: Textured/smooth finish with two coats of weather resistant exterior emulsion paint.
        Internal: Smooth putty finish with two coats of premium emulsion paint for walls and acrylic emulsion paint for ceiling over one coat of primer.`
    },
    {
        heading:"Flooring:",
        content:"Elegant double height ground floor entrance lobby (in tower) & Clubhouse. Lounge area: Italian marble flooring. Staircases: Granite flooring. Corridor: GVT tile flooring. Premium laminated wooden flooring in master bedroom. Living, Dining, other Bedrooms & Kitchen are with 800 X 800mm size double charged vitrified tile flooring. Toilets: Satin finish ceramic tile flooring. All Balconies/Utilities: Rustic finish ceramic tile flooring. Dadoing in Kitchen: 300 x 600 mm ceramic tiles dado of to 2’ height above kitchen platform level. Toilets: 300 x 600 mm ceramic tile dado up to false-ceiling level. Utility: 300 x 600 mm ceramic tile dado up to 3’6” height. Balcony: Aluminium handrail with toughened glass railing. Staircase (common area): M.S railing",
    },
    {
        heading:"Hand Railing:",
        content:"Balcony: Aluminium handrail with toughened glass railing. Staircase (common area): M.S railing."
    },
    {
        heading:"Kitchen/Utility:",
        content:"Provision for softened water inlet in kitchen. Sleeve provision for chimney exhaust. Water inlet/outlet provision in utility area for washing machine. Water inlet/outlet provision in utility area for dish washer (for 3.5/4/4+servant bhk only)."
    },
    {
        heading:"Toilet:",
        content:"Toughened glass partition for shower in master bedroom toilet. Granite counter for wash basin with basin mixer. Wall mounted EWC with concealed flush tank. Single lever diverter cum shower. Sanitary ware: TOTO or Grohe or equivalent. In Master Bedroom toilet: Vanity with premium C.P fittings of Grohe or equivalent make/brand."
    },
    {
        heading:"Electrical: ",
        content:"Concealed copper wiring of Havells/ Polycab or equivalent. Modular switches: Norysis/Schneider/ Legrand or equivalent make. Home automation switches in living room and master bedroom. Power socket for split air conditioners in all bedrooms. Provision of power socket for split air conditioners in living room. USB port for mobile phone charging in master bedroom. Power sockets in kitchen for hob, chimney, refrigerator, microwave oven, mixer, aquaguard and for washing machine in utility area. Power sockets for geysers and exhaust fans in all bathrooms. Motion sensor based light control in toilets. Power supply for Classic 4 BHK with servant- 5kW, Smart 4 BHK/3.5 BHK/3 BHK - 4kW, Smart 3 BHK/2.5 BHK/2 BHK- 3kW and for Smart 1 BHK -2kW. DG backup for 4 BHK with servant- 2Kw, Smart 4 BHK/3.5 BHK/3 BHK – 1.5Kw, Smart 3 BHK/2.5 BHK/2 BHK- 1Kw and for Smart 1BHK -0.5Kw. 100% uninterrupted DG power backup for lifts, pumps & lighting in common areas."
    },
    {
        heading:"Plumbing:",
        content:"Water metre for individual flats (for softened water lines). Drainage/sewage: SWR/PVC pipes & fittings. Water supply (Internal & External): CPVC or UPVC pipes & fittings. Plumbing Provision for internet, DTH, telephone & intercom"
    }
];

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

const newAmenitiesData = [
    {
        heading: "Gardens",
        amenities:[
            {name: "Alcove Garden", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612376/park_ikhrsa.png"},
            {name: "Aromatic Garden", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612376/herbs_rgm1li.png"},
            {name: "Courtyard Garden", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612375/garden_aq7dul.png"},
            {name: "Entry Feature Garden", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612376/park_2_ygj0qn.png"},
            {name: "Kinetic Garden", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612375/forest_1_fx38qm.png"},
            {name: "Musical Garden", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612374/fantasy_w6ehkk.png"},
            {name: "Herb Garden", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612375/bush_tyeric.png"},
            {name: "Plumeria Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612375/forest_cihjwq.png"},
            {name: "Garden Play Mount", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612374/fantasy_w6ehkk.png"},
        ]
    },
    {
        heading: "Outdoor",
        amenities:[
            {name: "Half Basketr Ball Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612374/basket-ball_ctqmtb.png"},
            {name: "Cricket Pitch", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612374/cricket-ground_e5cihd.png"},
            {name: "Multi-Purpose Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/court_n8h84u.png"},
            {name: "Outdoor Fitness Area", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612374/fitness_ihd2wi.png"},
            {name: "Maidan", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/conference_qimubj.png"},
            {name: "Bicycle Track", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612373/track_mnxtry.png"},
            {name: "Pet Park", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612374/dog_toxyka.png"},
            {name: "Sketing Rink", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612373/skater_ib8kge.png"},
            {name: "Mini Golf Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612373/birdie_prtfkm.png"},
            {name: "jogging Track", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618663/running_euxk5p.png"},
            {name: "Half Futsal Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612373/futsal_sso0xr.png"},
            {name: "Meditation Deck", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/meditation_xj2ajw.png"},
            {name: "Half Olympic Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/futsal_fsaaw7.png"},
            {name: "Day Bed", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1677150365/bed_leitmg.png"},
            {name: "Jucuzzi", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612372/pavilion_vik5rs.png"},
            {name: "Sunken Loungh", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612372/gazebo_m7uhie.png"},
            {name: "Barbecue Deck", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612373/barbecue_qwrwee.png"},
            {name: "Kids Pool", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612373/swimming-pool_wkipud.png"},
            {name: "Luxury Club House", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982230/barcelona_q3vjxw.png"},
            {name: "Changing Room/Shower Room", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612372/shower_qptagd.png"},
            {name: "Lagoon Pool", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612373/lake_ooawel.png"},
        ]
    },
    {
        heading: "Interact",
        amenities:[
            {name: "AmphiTheater", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612372/4d-theater_jprrhd.png"},
            {name: "Pool Pevilion", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982227/park_1_vwr2cw.png"},
            {name: "Event Lawn", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612372/people_ly4ik5.png"},
            {name: "Sitting Alcove", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618663/conference-room_sjyumg.png"},
            {name: "Bon Fire Pit With Lawn Area", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612372/camping_mj7u1s.png"},
            {name: "Interective Sculpture Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612372/art-museum_a7snzb.png"},
        ]
    },
    {
        heading: "Unwind",
        amenities:[
            {name: "Wind Sculpture", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/wind-turbine_q8r2lc.png"},
            {name: "Solar Pavilion", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/solar-activity_efz7hp.png"},
            {name: "Glant Chess", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/chess_caskdp.png"},
            {name: "Hopscotch", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/games_byybnv.png"},
            {name: "Snakes and Ladders", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/snake-and-ladder_pmjxbu.png"},
            {name: "Sand Pit", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/sandpit_soyyaz.png"},
            {name: "Kids Play Area", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620675/slide_qtenlx.png"},
            {name: "Walkway Promenade", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/danger_gco73r.png"},
            {name: "Youth Corner", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620675/youth_ehsx96.png"},
            {name: "Reflexology", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620676/massage_ueq2de.png"},
            {name: "Water Collection Pond", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620675/pond_gut3ed.png"},
            {name: "Seniors Court", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620674/football_n3zxn2.png"},
            {name: "Cascading Seats", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620675/public-toilet_qf71h5.png"},
            {name: "Wifi Pods", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620675/router_h1vnl9.png"},
            {name: "Viewing Deck", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620675/window_xgeqpq.png"},
            {name: "Open Lawn", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683620675/plains_qchoqb.png"},
        ]
    },
    {
        heading: "Entrance",
        amenities:[
            {name: "Entry Gateway", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/gate_bcbvcc.png"},
            {name: "Exit Gateway", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618663/gate_vzzuof.png"},
            {name: "Security Koisk", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618663/building_pybmsx.png"},
            {name: "Entry Plaza", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982226/barrier_uvt6zq.png"},
            {name: "Entrance Water Feature", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618661/fountain_1_ss754j.png"},
            {name: "Visitors Parking Area", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/arrow_mebogl.png"},
            {name: "Entry To Basement", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618662/parking_2_samxb7.png"},
            {name: "Exit From Basement", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618662/roadblock_bu6tr8.png"},
            {name: "Vehicular Driveway", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618662/parking_1_v1dyjs.png"},
            {name: "Bicycle Parking", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618662/parking_ncsgn3.png"},
            {name: "Unit Entry Foyer", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618661/courtyard_ofusqz.png"},
            {name: "Waiting Pavilion", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982229/park_hs8bum.png"},
            {name: "Bus Bay", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618662/bus-stop_ats53p.png"},
            {name: "Bus Parking", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618661/coach_x9zhr0.png"},
            {name: "Drop-Off Water Feature", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618662/waterfall_o0br6m.png"},
            {name: "Entry Courtyard", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618661/fence_qsiyoy.png"},
            {name: "DG Yard", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683612376/park_2_ygj0qn.png"},
            {name: "Gas Bank", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1681982228/pipe_nf7uii.png"},
            {name: "OWC", url:"https://res.cloudinary.com/di01osmzz/image/upload/v1683618661/owner_ujuns1.png"},
        ]
    },
]

export { propDetails, localitiesData, propertiesImages, specificationsData, faqData, newAmenitiesData};
import React, { useState } from "react";
import './App.css';

import SideBar from './component/SideBar';
import MainPage from './component/MainPage';
import Brochure from './component/Brochure';
import Enquire from './component/Enquire';
import Photos from './component/Photos';

let Bbox = false;
let Ebox = false;
let Pbox = false;

function App() {
  const [brochureBox, setBrochureBox] = useState("none");
  const [enquireBox, setEnquireBox] = useState("none");
  const [photosBox, setPhotosBox] = useState("none");
  
  const onBrochur = () => {
    Bbox = !Bbox;
    Bbox ? setBrochureBox("Flex") : setBrochureBox("none");
    setEnquireBox("none");
  };
  const onEnquire = () => {
    Ebox = !Ebox;
    Ebox ? setEnquireBox("Flex") : setEnquireBox("none");
    setBrochureBox("none");
  };
  const onPhotos = () => {
    Pbox = !Pbox;
    Pbox ? setPhotosBox("Flex") : setPhotosBox("none");
  };

  return (
    <div className="main-con hor-order">
        <MainPage onBrochur={onBrochur} onEnquire={onEnquire} onPhotos={onPhotos} />
        <SideBar />

        <div className="fixed-top" style={{display: brochureBox}}>
            <Brochure onBrochur={onBrochur} />
        </div>

        <div className="fixed-top" style={{display: enquireBox}}>
            <Enquire onEnquire={onEnquire} />
        </div>

        <div className="position fixed-top" style={{display: photosBox}}>
          <Photos onPhotos={onPhotos} />
        </div>
    </div>
  );
}

export default App;

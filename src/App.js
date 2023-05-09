import React, { useState } from "react";
import './App.css';

import SideBar from './component/SideBar';
import MainPage from './component/MainPage';
import Photos from './component/Photos';

let Pbox = false;

function App() {
  const [photosBox, setPhotosBox] = useState("none");

  const onPhotos = () => {
    Pbox = !Pbox;
    Pbox ? setPhotosBox("Flex") : setPhotosBox("none");
  };

  return (
    <div className="main-con hor-order">
        <MainPage onPhotos={onPhotos} />
        <SideBar />

        <div className="position fixed-top" style={{display: photosBox}}>
          <Photos setPhotosBox={setPhotosBox} />
        </div>
    </div>
  );
}

export default App;

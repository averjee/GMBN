import Header from "./header";
import Slider from "../components/slider";
import React, { useState, useEffect } from "react";
import TopBar from '../assets/TopBar.png'

const sliders = ["LATEST VIDEOS", "DIRT SHED SHOW", "HOW TO", "MTB MAINTENANCE", "MARTYN ASHTON", "ASK GMBN", "FEATURES", "TOP 10S", "GMBN TECH", "PRESENTERS", "MARTYN ASHTON", "NEIL DONOGHUE", "BLAKE SAMSON", "ANDREW DODD"];

const Home = () => {
  const [home, setHome] = useState(0);
  
  useEffect(() => {
    fetch("https://www.globalcyclingnetwork.com/api/videos")
      .then((response) => response.json())
      .then(({ videos }) => {
        setHome(videos);
      });
  }, []);

  return (
    <div>
      <img
        src={TopBar}
        className="TopBar"
        alt="Top Bar"
      />
      <Header featured={home[0]} />
      <div style={{ display: "flex", flexDirection: "column", height: "1000px", marginTop: "20px", marginLeft: "5px" }}>
        {sliders && sliders.map((rail, key) => <Slider title={rail} data={home} key={key}/>)}
      </div>
    </div>
  );
};

export default Home;

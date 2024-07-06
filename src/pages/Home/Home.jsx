import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="hero">
        <img src={hero_banner} alt="" />
        <div className="hero-caption">
          <h1>classic tales</h1>
          <h2>Lights..Camera..ACTION!</h2>
          <h1>"Movies and TV shows from every genre"</h1>
        </div>
      </div>
      <TitleCards></TitleCards>

      <div className="more-cards">
        <TitleCards
          title={"Blockbuster Movies"}
          category={"top_rated"}
        ></TitleCards>
        <TitleCards title={"Now Playing"} category={"now_playing"}></TitleCards>
        <TitleCards title={"Upcoming"} category={"upcoming"}></TitleCards>
        <TitleCards
          title={"Top picks for You"}
          category={"popular"}
        ></TitleCards>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;

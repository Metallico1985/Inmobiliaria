import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Estudio.css";
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>;

function Estudio() {
  return (
    <div id="estudio">
      <div>
        <Header />
      </div>
      <div className="imageContainer">
        <img className="image" src="/Images/en-construccion.gif"></img>
      </div>
      <Footer />
    </div>
  );
}

export default Estudio;

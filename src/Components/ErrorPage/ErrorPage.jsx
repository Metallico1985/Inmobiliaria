import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>;

function ErrorPage() {

  const navigate = useNavigate();
  return (
    <div id="errorPage">
      <div>
      </div>
      <div>
        <img className="image1" src="/Images/mudanza.jpg" />
        <img className="image2" src="/Images/404-cajas.gif"></img>
      </div>
      <div className="footer">
      </div>
      {/* <button onClick={() => navigate("/main")}></button> */}
    </div>
  );
}

export default ErrorPage;

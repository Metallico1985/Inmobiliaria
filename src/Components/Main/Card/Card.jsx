import React from "react";
import { FaBed } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/Bi";
import { RxRulerSquare } from "react-icons/Rx";
// import { IconContext } from "react-icons";

import "./Card.css";

function Card({
  image,
  barrio,
  departamento,
  metros2,
  tipoInmueble,
  operacion,
  precio,
  dormitorios,
}) {
  return (
    <div className="box">
      <div className="imgBox">
        <img class="imgInmueble" src={image} alt="" />
        <p class="Operacion">{operacion}</p>
      </div>
      <div class="textFlex">
        <div className="cardRight">
          <p class="cardLocation1">{tipoInmueble}</p>
          <div className="location">
            <p class="cardLocation1">{barrio}</p>
            <p class="cardLocation1">{departamento}</p>
          </div>
        </div>
        <hr />
        <div class="cardBottom">
          {tipoInmueble == "Oficina" || tipoInmueble == "Terreno" || tipoInmueble == "LocalComercial" || tipoInmueble == "LocalIndustrial" ? <></> :
            <div className="desc">
             
                <FaBed />
              
              <p class="cardText">{dormitorios}</p>
            </div>}
          <div className="desc">
            
              <RxRulerSquare />
            
            <p class="cardText">{metros2}</p>
          </div>
          <div className="desc1">
            
              <BiDollarCircle />
           
            <p class="cardPrice">{precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

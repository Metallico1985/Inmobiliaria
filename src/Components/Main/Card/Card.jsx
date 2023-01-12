import React from "react";
import { FaBed } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/fa";
import { TfiRuler } from "react-icons/fa";

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
            <div className="iconAndData">
             
                <FaBed />
              
              <p class="cardText">{dormitorios}</p>
            </div>}
          <div className="iconAndData">
            
              <TfiRuler />
            
            <p class="cardText">{metros2}</p>
          </div>
          <div className="iconAndData">
            
              <MdAttachMoney />
           
            <p class="cardPrice">{precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

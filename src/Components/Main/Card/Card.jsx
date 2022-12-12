import React from "react";
import { FaBed } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/Bi";
import { RxRulerSquare } from "react-icons/Rx";
import { IconContext } from "react-icons";

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
          <div className="desc">
            <IconContext.Provider value={{ color: "grey", size: "1.5rem" }}>
              <FaBed />
            </IconContext.Provider>
            <p class="cardText">{dormitorios}</p>
          </div>
          <div className="desc">
            <IconContext.Provider value={{ color: "grey", size: "1.5rem" }}>
              <RxRulerSquare />
            </IconContext.Provider>
            <p class="cardText">{metros2}</p>
          </div>
          <div className="desc1">
            <IconContext.Provider value={{ color: "grey", size: "1.5rem" }}>
              <BiDollarCircle />
            </IconContext.Provider>
            <p class="cardPrice">{precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

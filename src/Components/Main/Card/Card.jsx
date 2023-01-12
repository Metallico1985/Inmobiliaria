import React from "react";
import StraightenIcon from '@mui/icons-material/Straighten';
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
             
             {/* <FontAwesomeIcon icon="fa-solid fa-bed" /> */}
              
              <p class="cardText">{dormitorios}</p>
            </div>}
          <div className="iconAndData">
          {/* <FontAwesomeIcon icon="fa-regular fa-ruler-triangle" /> */}
          <StraightenIcon></StraightenIcon>
            <p class="cardText">{metros2}</p>
          </div>
          <div className="iconAndData">
            
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-dollar" /> */}
           
            <p class="cardPrice">{precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

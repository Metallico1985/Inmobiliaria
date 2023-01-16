import React from "react";
import StraightenIcon from '@mui/icons-material/Straighten';
import HotelIcon from '@mui/icons-material/Hotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
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
      <div class="textFlexCard">
        <div className="cardRight"> 
          <p class="cardLocation1">{`Tipo Inmueble: ${tipoInmueble}`}</p>
          <div className="location">
            <p class="cardLocation1">{`Barrio: ${barrio}`}</p>
            <p class="cardLocation1">{`Departamento: ${departamento}`}</p>
          </div>
        </div>
        <hr />
        <div class="cardBottom">
          {tipoInmueble == "Oficina" || tipoInmueble == "Terreno" || tipoInmueble == "LocalComercial" || tipoInmueble == "LocalIndustrial" ? <></> :
            <div className="iconAndData">
             
             <HotelIcon/>
              
              <p class="cardText">{dormitorios}</p>
            </div>}
          <div className="iconAndData">
          <StraightenIcon></StraightenIcon>
            <p class="cardText">{metros2}</p>
          </div>
          <div className="iconAndData">
            
         <AttachMoneyIcon/>
           
            <p class="cardPrice">{precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

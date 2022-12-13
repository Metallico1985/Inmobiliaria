import "./DetalleProp.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarInmuebles } from "../../API/Rule_inmuebles";
import { FaBed } from "react-icons/fa";
// import { BiDollarCircle } from "react-icons/Bi";
import { RxRulerSquare } from "react-icons/Rx";
import { IconContext } from "react-icons";
import { RxDoubleArrowLeft } from "react-icons/Rx";
import { RxDoubleArrowRight } from "react-icons/Rx";

function DetalleProp() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    traerPropiedades();
  }, []);

  const [propiedades, setPropiedades] = useState([]);

  const traerPropiedades = async () => {
    await listarInmuebles()
      .then((response) => {
        setPropiedades(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const inmueble = propiedades.find((inmueble) => {
    return inmueble.id_inmueble == id;
  });
  console.log(inmueble, propiedades);

  const indexActual = propiedades.findIndex((inmueble) => {
    return inmueble.id_inmueble == id;
  });

  function moveLeft() {
    if (indexActual == 0) {
      let indexLeft = propiedades.length - 1;
      const inmuebleLeft = propiedades[indexLeft];
      navigate("/detalle/" + inmuebleLeft.id_inmueble);
    } else {
      let indexLeft = indexActual - 1;
      const inmuebleLeft = propiedades[indexLeft];
      navigate("/detalle/" + inmuebleLeft.id_inmueble);
    }
  }

  function moveRight() {
    if (indexActual == propiedades.length - 1) {
      let indexRight = 0;
      const inmuebleRight = propiedades[indexRight];
      navigate("/detalle/" + inmuebleRight.id_inmueble);
    } else {
      let indexRight = indexActual + 1;
      const inmuebleRight = propiedades[indexRight];
      navigate("/detalle/" + inmuebleRight.id_inmueble);
    }
  }

  return (
    <div className="mainDetalle">
      {inmueble ? (
        <div className="cardDetalle">
          <div className="cardImgContainer">
            <IconContext.Provider value={{ color: "black", size: "30px" }}>
              <RxDoubleArrowLeft onClick={moveLeft} />
            </IconContext.Provider>
            <img
              className="cardImg"
              src={`http://localhost:8000/api/inmuebles/imagenPropiedad/${inmueble.id_inmueble}`}
              alt=""
            />
            <IconContext.Provider
              value={{ color: "black", size: "30px" }}
              onClick={moveRight}
            >
              <RxDoubleArrowRight onClick={moveRight} />
            </IconContext.Provider>
          </div>
          <div class="textFlex">
            <div className="operacionYref">
              <div className="tipo">{inmueble.tipo_operacion}</div>
              <div className="ref">{`Propiedad nro: ` + inmueble.id_inmueble}</div>
            </div>

            <div className="cardRight">
              <div class="cardTop">
                <p class="tipoInmueble">{inmueble.tipo_inmueble}</p>
              </div>
              <div className="location">
                <p class="barrio">{`Barrio: ` + inmueble.barrio}</p>
                <p class="depto">{`Departamento: ` + inmueble.departamento}</p>
              </div>
              <div className="descripcion">
                {`- ` + inmueble.descripcion}
              </div>
            </div>
            <div class="cardBottom">
              {inmueble.tipo_inmueble == "Oficina" || inmueble.tipo_inmueble == "LocalComercial" || inmueble.tipo_inmueble == "LocalIndustrial" ? <></> : <div className="desc">
                <IconContext.Provider value={{ color: "gray", size: "30px" }}>
                  <FaBed />
                </IconContext.Provider>
                <p class="cardText">{inmueble.dormitorios}</p>
              </div>}

              <div className="desc">
                <IconContext.Provider value={{ color: "gray", size: "30px" }}>
                  <RxRulerSquare />
                </IconContext.Provider>
                <p class="cardText">{inmueble.m2 + ` mts2`}</p>
              </div>
              <div className="desc1">
                <IconContext.Provider value={{ color: "gray", size: "30px" }}>
                  <BiDollarCircle />
                </IconContext.Provider>
                <p className="cardPrice">{inmueble.precio}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DetalleProp;

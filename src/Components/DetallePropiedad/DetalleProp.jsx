import "./DetalleProp.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarInmuebles } from "../../API/Rule_inmuebles";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import StraightenIcon from '@mui/icons-material/Straighten';
import HotelIcon from '@mui/icons-material/Hotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
    <div>
      <Header/>
    <div className="mainDetalle">
      {inmueble ? (
        <div className="cardDetalle">
          <div className="cardImgContainer">

            <KeyboardArrowLeftIcon onClick={moveLeft}/>

            <img
              className="cardImg"
              src={`https://back-inmobiliaria.vercel.app/api/inmuebles/imagenPropiedad/${inmueble.id_inmueble}`}
              alt=""
            />
            <KeyboardArrowRightIcon onClick={moveRight}/>
           
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
               
                <p class="desc">
                  <HotelIcon/>
                   {inmueble.dormitorios}</p>
              </div>}

              <div className="desc">
              <StraightenIcon></StraightenIcon>
                <p class="cardText">{inmueble.m2 + ` mts2`}</p>
              </div>
              <div className="desc">
              <AttachMoneyIcon/>
                <p className="cardPrice">{inmueble.precio}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (null)}

</div>
    <Footer/>
    </div>
  );
}
      
      // (
      //   <div className="cardDetalle">
      //     <div className="cardImgContainer">
      //       {/* <IconContext.Provider value={{ color: "black", size: "30px" }}>
      //         <RxDoubleArrowLeft onClick={moveLeft} />
      //       </IconContext.Provider> */}
      //       <img
      //         className="cardImg"
      //         // src={`https://back-inmobiliaria.vercel.app/api/inmuebles/imagenPropiedad/${inmueble.id_inmueble}`}
      //         src="https://revista-lagunas.s3.us-east-2.amazonaws.com/2021/12/360-los-mejores-estilos-y-disenos-para-una-casa-de-campo-129-big.jpg"
      //         alt=""
      //       />
      //       {/* <IconContext.Provider
      //         value={{ color: "black", size: "30px" }}
      //         onClick={moveRight}
      //       >
      //         <RxDoubleArrowRight onClick={moveRight} />
      //       </IconContext.Provider> */}
      //     </div>
      //     <div class="textFlex">
      //       <div className="operacionYref">
      //         <div className="tipo">Venta</div>
      //         <div className="ref">23</div>
      //       </div>

      //       <div className="cardRight">
      //         <div class="cardTop">
      //           <p class="tipoInmueble">Casa</p>
      //         </div>
      //         <div className="location">
      //           <p class="barrio">Pocitos</p>
      //           <p class="depto">Montevideo</p>
      //         </div>
      //         <div className="descripcion">
      //           Hermosa casa en inmejorable uvicacion de la ciudad
      //         </div>
      //       </div>
      //       <div class="cardBottom">
      //           {/* <IconContext.Provider value={{ color: "gray", size: "30px" }}>
      //             <FaBed />
      //           </IconContext.Provider> */}
      //           <p class="cardText">3 dormitorios</p>
      //         </div>

      //         <div className="desc">
      //           {/* <IconContext.Provider value={{ color: "gray", size: "30px" }}>
      //             <RxRulerSquare />
      //           </IconContext.Provider> */}
      //           <p class="cardText">150 mts2</p>
      //         </div>
      //         <div className="desc1">
      //           {/* <IconContext.Provider value={{ color: "gray", size: "30px" }}>
      //             <BiDollarCircle />
      //           </IconContext.Provider> */}
      //           <p className="cardPrice">230000</p>
      //         </div>
      //       </div>
      //     </div>
        
      // )}
   

export default DetalleProp;

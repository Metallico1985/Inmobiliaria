import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import Footer from "../Footer/Footer";
import { listarInmuebles } from "../../API/Rule_inmuebles";
import "./Main.css";
import { Link } from "react-router-dom";

import "./Main.css";

function Main() {
  useEffect(() => {
    traerPropiedades();
  }, []);

  const [propiedades, setPropiedades] = useState([]);
  const listaFiltrada = (lista) => { setPropiedades(lista) }

  const traerPropiedades = async () => {
    await listarInmuebles()
      .then((response) => {
        setPropiedades(response);
      })
      .catch((error) => {
        alert(error);
      });
  };



  return (
    <div className="mainContainer">
      <Header />
      <Searchbar listaFiltrada={listaFiltrada} />
      {!propiedades.length ? <div><h2 className="explora">Por el momento no contamos con propiedades que cumplan estos requisitos...</h2></div> :
        <>
          <h2 className="explora">Explora nuestros inmuebles</h2>
          <div className="flexGridContainer">
            <div className="gridContainer">
              {propiedades.map((inmueble) => (
                <div className="grid">
                  <Link to={`/detalle/${inmueble.id_inmueble}`}>
                    {console.log(inmueble.id_inmueble)}
                    <Card
                      metros={inmueble.m2}
                      image={`http://localhost:8000/api/inmuebles/imagenPropiedad/${inmueble.id_inmueble}`}
                      barrio={inmueble.barrio}
                      departamento={inmueble.departamento}
                      metros2={inmueble.m2}
                      tipoInmueble={inmueble.tipo_inmueble}
                      operacion={inmueble.tipo_operacion}
                      precio={inmueble.precio}
                      dormitorios={inmueble.dormitorios}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>}

      <Footer />
    </div>
  );
}

export default Main;

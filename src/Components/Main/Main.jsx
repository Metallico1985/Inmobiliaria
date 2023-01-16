import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import Footer from "../Footer/Footer";
import { listarInmuebles } from "../../API/Rule_inmuebles";
import { Link } from "react-router-dom";
import { Backdrop, CircularProgress } from '@mui/material'
import "./Main.css";

function Main() {
  useEffect(() => {
    traerPropiedades();
  }, []);

  const [propiedades, setPropiedades] = useState([]);
  const listaFiltrada = (lista) => { setPropiedades(lista) }
  const [open, setOpen] = useState(true);

  const handleOpen = () => { setOpen() }

  const traerPropiedades = async () => {
    await listarInmuebles()
      .then((response) => {
        setPropiedades(response);
        handleOpen(false)
      })
      .catch((error) => {
        handleOpen(false)
        alert(error);
      });
  };

  return (
    <div className="mainContainerMain">
      <Header />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Searchbar listaFiltrada={listaFiltrada} />
      {!propiedades.length ? <div><h2 className="explora">Por el momento no contamos con propiedades que cumplan estos requisitos...</h2></div> :
        <>
          <h2 className="explora">Explora nuestros inmuebles</h2>
          <div className="gridContainerFlex">
            <div className="gridContainer">
              {propiedades.map((inmueble) => (
                <div className="grid">
                  <Link to={`/detalle/${inmueble.id_inmueble}`}>
                    {console.log(inmueble.id_inmueble)}
                    <Card
                      metros={inmueble.m2}
                      image={`https://back-inmobiliaria.vercel.app/api/inmuebles/imagenPropiedad/${inmueble.id_inmueble}`}
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

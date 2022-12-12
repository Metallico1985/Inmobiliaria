import React from "react";
import { useState } from "react";
import { aplicarFiltros } from "../../API/Rule_inmuebles";
import "./Searchbar.css";

function Searchbar(props) {

  const [operacion, setOperacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [departamento, setDepto] = useState("");
  // const [listaFiltrada, setListaFiltrada] = useState([])

  const handleOperacion = (e) => { setOperacion(e.target.value) };
  const hanldeTipo = (e) => { setTipo(e.target.value) };
  const handleDormitorios = (e) => { setDormitorios(e.target.value) };
  const handleDepto = (e) => { setDepto(e.target.value) };

  const handleFiltros = async () => {
    const datos = { operacion, tipo, dormitorios, departamento }

    await aplicarFiltros(datos)
      .then((response) => {
        props.listaFiltrada(response)
        // alert("Aplicados correctamente")
      })
      .catch((error) => {
        alert(error);
      })

  };
  return (
    <div className="filtersContainer">
      <div class="searchbar">
        <ul class="searchbarList">
          <li class="searchbarItem">
            <div class="filterArea">
              <select onChange={handleOperacion} name="Operacion">
                <option value="">Operacion</option>
                <option value="Venta">Venta</option>
                <option value="Alquiler">Alquiler</option>
              </select>
            </div>
          </li>

          <li class="searchbarItem">
            <div class="filterArea">
              <select onChange={hanldeTipo} name="Tipo inmueble">
                <option value="">Tipo inmueble</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Terreno">Terreno</option>
                <option value="LocalComercial">Local Comercial</option>
                <option value="LocalIndustrial">Local Industrial</option>
                <option value="Oficina">Oficina</option>
              </select>
            </div>
          </li>
          {tipo == "oficina" || tipo == "terreno" || tipo == "localComercial" || tipo == "localIndustrial" ? <></> : <li class="searchbarItem">
            <div class="filterArea">
              <select onChange={handleDormitorios} name="Dormitorios">
                <option value="">Dormitorios</option>
                <option value="monoambiente" >Monoambiente</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">Más de 4</option>
              </select>
            </div>
          </li>}


          <li class="searchbarItem">
            <div class="filterArea">
              <select onChange={handleDepto} name="Departamento">
                <option value="">Departamento</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Canelones">Canelones</option>
                <option value="Maldonado">Maldonado</option>
              </select>
            </div>
          </li>
          <button onClick={handleFiltros} className="">Aplicar</button>
          <button onClick={() => window.location.reload()} className="">Limpiar filtros</button>
        </ul>
      </div>
    </div>
  );

}
export default Searchbar;

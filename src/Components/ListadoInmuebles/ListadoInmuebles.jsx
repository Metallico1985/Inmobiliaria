import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
// import Inmuebles from "../Main/Data";
import { useEffect, useState } from "react";
import { listarInmuebles } from '../../API/Rule_inmuebles'

function ListadoInmuebles() {

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


  const columns = useMemo(
    () => [
      {
        accessorKey: "id_inmueble",
        header: "Id",
        size: 100,
        Header: <i style={{ color: "red" }}>ID</i>,
      },
      {
        accessorKey: "descripcion",
        header: "Descripción",
        size: 150,
        Header: <i style={{ color: "red" }}>Nombre</i>,
      },
      {
        accessorKey: "tipo_operacion",
        header: "Operacion",
        size: 100,
        Header: <i style={{ color: "red" }}>Operacion</i>,
      },
      {
        accessorKey: "tipo_inmueble",
        header: "Tipo",
        size: 100,
        Header: <i style={{ color: "red" }}>Tipo</i>,
      },
      {
        accessorKey: "m2",
        header: "Area",
        size: 100,
        Header: <i style={{ color: "red" }}>Metros</i>,
      },
      {
        accessorKey: "precio",
        header: "Precio",
        size: 100,
        Header: <i style={{ color: "red" }}>Precio</i>,
      },
      {
        accessorKey: "direccion",
        header: "Direccion",
        size: 100,
        Header: <i style={{ color: "red" }}>Direccion</i>,
      },
      {
        accessorKey: "barrio",
        header: "Barrio",
        size: 100,
        Header: <i style={{ color: "red" }}>Barrio</i>,
      },
      {
        accessorKey: "departamento",
        header: "Depto",
        size: 100,
        Header: <i style={{ color: "red" }}>Depto</i>,
      },

    ],
    []
  );

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={propiedades}
        title="Lista de Inmuebles"
      />
    </div>
  );
}

export default ListadoInmuebles;

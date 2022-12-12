import "./FormModificar.css";
import React from 'react';
import { useForm } from 'react-hook-form';
import { modificarInmueble } from '../../API/Rule_inmuebles'
import { useNavigate } from 'react-router-dom'

function ModificarInmueble() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("descripcion", data.descripcion);
    formData.append("m2", data.m2);
    formData.append("precio", data.precio);
    formData.append("tipo_inmueble", data.tipo_inmueble);
    formData.append("tipo_operacion", data.tipo_operacion);
    formData.append("dormitorios", data.dormitorios);
    formData.append("barrio", data.barrio);
    formData.append("departamento", data.departamento);
    formData.append("direccion", data.direccion);
    formData.append('pais', "Uruguay");
    formData.append("id", data.id);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      },
    }

    await modificarInmueble(formData, config)
      .then(() => {
        alert("Se ha ingresado correctamente la propiedad")
        navigate("/main");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (

    <div className='formContainer'>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h2>Modificar propiedad</h2>
        <input
          placeholder='Ingrese ID'
          className="input"
          type="text"
          {...register("id", {
            required: true
          })}
        />
        <input
          placeholder='Ingrese una descripción'
          className="input"
          type="text"
          {...register("descripcion", {
            required: true
          })}
        />
        {errors.nombre?.type === "required" && <span>Ingrese la descripción</span>}

        <select {...register("tipo_inmueble")}>
          <option value="" >Tipo propiedad</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Terreno">Terreno</option>
          <option value="LocalComercial">Local Comercial</option>
          <option value="LocalIndustrial">Local Industrial</option>
          <option value="Oficina">Oficina</option>
        </select>

        <select {...register("tipo_operacion")}>
          <option >Tipo operación</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
        </select>

        <select {...register("dormitorios")}>
          <option value="">Cantidad dormitorios</option>
          <option value="Monoambiente">Monoambiente</option>
          <option value="1">1 dormitorio</option>
          <option value="2">2 dormitorios</option>
          <option value="3">3 dormitorios</option>
          <option value="4">4 o más dormitorios</option>
        </select>

        <input
          placeholder='Metros cuadrados'
          className="input"
          type="text"
          {...register("m2", {
            required: true
          })}
        />
        {errors.metros_cuadrados?.type === "required" && <span>Ingrese el area</span>}

        <input
          placeholder='Precio de venta'
          className="input"
          type="number"
          {...register("precio", { required: true })}
        />
        {errors.precio_venta?.type === "required" && <span>Debe ingresar un precio</span>}

        <input
          placeholder='Barrio'
          className="input"
          type="text"
          {...register("barrio", { required: true })}
        />
        {errors.ciudad?.type === "required" && <span>Ingrese un barrio</span>}

        <select {...register("departamento")}>
          <option value="" >Departamento</option>
          <option value="Montevideo">Montevideo</option>
          <option value="Canelones">Canelones</option>
          <option value="Maldonado">Maldonado</option>
        </select>
        {errors.departamento?.type === "required" && <span>Ingrese un departamento</span>}

        <input
          placeholder='Direccion'
          className="input"
          type="text"
          {...register("direccion", { required: true })}
        />
        {errors.direccion?.type === "required" && <span>Ingrese la dirección</span>}

        <label htmlFor="imagen">
          <input
            className="input"
            type="file"
            {...register("file",
              {
                required: false,
                validate: (value) => value[0].size <= 10000000, //1MB
              }
            )}
          />
          <br />
          {errors.file?.type === "required" && <span>La imagen es requerida</span>}
          {errors.file?.type === "validate" && <span>Tamanio maximo de 1MB</span>}
        </label>

        <input type="submit" value="Registrar" className="btnIngresoProp" />
      </form>
    </div>
  )
}

export default ModificarInmueble;

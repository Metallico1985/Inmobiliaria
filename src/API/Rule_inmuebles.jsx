import API from "./Rule_API";

export const listarInmuebles = async () => {
    let url = "/api/inmuebles/list";
    return await API.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud"
        })
}
export const eliminarInmueble = async (data) => {
    let url = `/api/inmuebles/eliminar/${data.id}`;
    console.log(data.id)
    return await API.delete(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud"
        })
}
export const modificarInmueble = async (data, config) => {
    let url = "/api/inmuebles/modificar";
    return await API.put(url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud"
        })
}
export const ingresoPropiedad = async (data, config) => {
    let url = '/api/inmuebles/nuevaPropiedad';
    console.log(data)
    return await API.post(url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud"
        })
}
export const detalleInmueble = async (data) => {
    let url = `/api/inmuebles/detalle/${data}`;
    return await API.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            // console.log(error);
            throw error.response.data.error || "Error procesando la solicitud"
        })
}
export const aplicarFiltros = async (data) => {
    let url = '/api/inmuebles/filtrados';
    console.log(data)
    return await API.post(url, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            throw error.response.data.error || "Error procesando la solicitud"
        })
}
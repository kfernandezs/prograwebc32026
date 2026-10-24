import { API } from "./config.js";

//Get  https://paginas-web-cr.com/Api/hotelApi/hotel/hotel.php 

export async function consultarHoteles() {
    //Fecth sirve para invocar o enviar datos por APIS
    const respuesta = await fetch(API.HOTEL);

    if (!respuesta.ok) {
        throw new Error("Error al consultar el servdidor de hotel.");
    }
    console.log(respuesta.json());

    return await respuesta.json();

}


consultarHoteles();
const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        sitio_web: {
            type: String,
            required: true
        },
        usuario: {
            type: String,
            required: true
        },
        fecha_creacion: {
            type: Date,
            default: Date.now
        },
        estado: {
            type: String,
            required: true,
            default: 'Activo'
        }





        //       "fecha_creacion": "2026-11-20 21:31:01",
        //       "estado": "Activo"
    }
);

module.exports = mongoose.model('hotel', hotelSchema);

//{ "nombre":"Hotel Paradise", "descripcion":"Hotel 5 estrellas", "telefono":"2222-2222", "correo":"hotel@gmail.com","sitio_web":"https://hotel.com", "usuario":"Mario" } 


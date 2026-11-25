
const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');

//Get como lo teniamos el hotel api
router.get('/', async (req, res) => {
    try {
        const hotel = await Hotel.find();
        res.json(

            {
                code: 200,
                message: "Consulta realizada correctamente",
                data: hotel
            });


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


});
//Get por id como lo teniamos el hotel api
router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            res.status(404).json({
                message: "Hotel no encontrado: " + req.params.id
            })
        }

        res.json(

            {
                code: 200,
                message: "Consulta realizada correctamente",
                data: hotel
            });


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


});




//Post como lo teniamos el hotel api
router.post('/', async (req, res) => {
    try {
        const hotel = new Hotel(req.body);

        const guardarHotel = await hotel.save();

        res.status(201).json(
            {

                message: "Hotel creado",
                data: guardarHotel
            });


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


});

//Put como lo teniamos el hotel api
router.put('/:id', async (req, res) => {
    try {

        const hotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body, {
            new: true,
            runValidators: true
        }
        );

        if (!hotel) {
            res.status(404).json({
                message: "Hotel no encontrado: " + req.params.id
            })
        }



        res.status(202).json(
            {

                message: "Hotel Actualizado",
                data: hotel
            });


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


});


//Delete por id como lo teniamos el hotel api
router.delete('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);

        if (!hotel) {
            res.status(404).json({
                message: "Hotel no encontrado: " + req.params.id
            })
        }

        res.json(

            {
                code: 203,
                message: "Hotel Eliminado",
                data: req.params.id
            });


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


});


module.exports = router;


// {
//   "code": 200,
//   "message": "Consulta realizada correctamente",
//   "data": [
//     {
//       "_id": "6b0105743bcca29ca6a623a8",
//       "nombre": "Hotel Paradise",
//       "descripcion": "Hotel 5 estrellas",
//       "telefono": "2222-2222",
//       "correo": "hotel@gmail.com",
//       "sitio_web": "https://hotel.com",
//       "usuario": "Mario"
//     }
//   ]
// }


//       "id": 413,
//       "nombre": "Yourrrrr",
//       "descripcion": "jasdfnon",
//       "telefono": "2134234544",
//       "correo": "mmora@gmail.com",
//       "sitio_web": "http:www.mishuevos.com",
//       "usuario": "charrrr",
//       "fecha_creacion": "2026-11-20 21:31:01",
//       "estado": "Activo"
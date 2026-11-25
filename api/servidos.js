require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5004;
//Publicamos los archivos del servidor


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ escribimos: 'Bienvenido a nuestra API' });
});


app.use('/hotel', require('./routes/hotelRoute'));

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log("Conexion a Base NoSQL")
    })
}).catch((error) => {
    console.error("Fallo Conexion a Base NoSQL: ");
});



app.listen(PORT, () => {
    console.log(`Servidor activo API http://localhost:${PORT}`);
});
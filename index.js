const express = require('express');
const morgan = require('morgan');

//inicializaciones
const app  = express();
require("dotenv").config();
require("./connection");


// middlewares//
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Conexion al servidor
app.set("port", process.env.PORT || 3000);

//routes //rutas
app.use(require('./routes/user.routes'));

// devuelve la conexion
app.listen(app.get("port"),()=>
    console.log(`server on port ${app.get("port")}`)
);

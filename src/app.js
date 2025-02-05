

//Modulos de common js.
//const express = require("express");

//E6 modules ECMASCRIPT modules código moderno para que esto funcione tenemos que tener una versión superior a la de node 16.
//Para activar esto es necesario ir al package.json y agregar type module.


import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'


const app = express();


app.use(express.json()); //Para que pueda interpretar los JSON.
app.use(indexRoutes);
app.use('/api', employeesRoutes);


//Cuando no se encuentra la ruta en vez de enviar el HMTL vamos a enviar un mensaje diferente.

app.use((req, res, next) => {
    res.status(404).json({
        msg: "ENDPOINT NOT FOUND"
    });
});

export default app;
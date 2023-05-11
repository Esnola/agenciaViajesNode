//const express = require('express');
import express from 'express'; //Hay que modifiacr en el paackge.jspon para que funcione.
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar con la Base de Datos.
db.authenticate()
   .then( () => console.log('Base de datos conectada'))
   .catch(error => console.log(error))


//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next)=>{
   const year = new Date()
   res.locals.actualYear = year.getFullYear();
   res.locals.nombreSitio = "Agencia La Locura"
   next()
})

//Añador body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));



//Definir la carpeta pública
app.use(express.static('public'));

//Añadir Router
app.use('/', router)


app.listen(port,()=>console.log(`El servidor está levantado en el puerto ${port}`))


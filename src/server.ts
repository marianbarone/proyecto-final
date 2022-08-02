import express from 'express' 
import router = require("./routes/index");
import {request, response} from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

const error404= (request:any, response:any,next:any)=>{
    let mensajeError={
        error : "-2",
        descripcion: `ruta: ${request.url} método: ${request.method} no implementado`
    }
    response.status(404).json( mensajeError)
    next()
} 
//Ruta NO encontrada
app.use(error404)

const server = app.listen(port, ()=> console.log(`Server listening on port: ${port}`));
server.on("error", err => console.log(`Oh no! Something is broken on the server: ${err}`));


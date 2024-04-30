// 1.- importar express y las otras libreriras
const express = require('express');
const exphbs = require ('express-handlebars')

// 2.- Crear instancia de express
const app = express ()

// 3.- Escuchar conexiones HTTP en puerto 3000
app.listen (3000, ()=> {
    console.log ("El servidor esta iniciado el puerto 3000")
})

// 4. Definir el motor de vistas
app.set ("view engine", "handlebars")

// 4.1 Configurar al motor de vistas
app.engine (
    "handlebars",
    exphbs.engine()
)

// 4.2 middleware para dejar una ruta fija o estatica para que apunte a bootstrap
// /node_modules/bootstrap/dist
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"))
app.use("/popper", express.static(__dirname + "/node_modules/@popperjs/core/dist/umd"))
app.use("/assets", express.static(__dirname + "/assets"))

// 5 Definición de rutas
app.get("/", function (req, res) {
    res.render("home", {
        productos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
    });
})

app.get("/usuarios", function(req, res) {
  res.render("usuarios")
})












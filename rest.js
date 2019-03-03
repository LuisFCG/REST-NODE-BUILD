var express = require("express");
var rest = express();

rest.get("/url", (req, res, next) => {
    res.json(["Luis", "Pedro", "Monica"]);
});

rest.listen(3001, () => {
    console.log("Servidor que se ejecuta en el puerto 3001");
});
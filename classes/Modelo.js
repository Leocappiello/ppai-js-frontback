const Marca = require("./Marca")

class Modelo{
    constructor(nombre, marca){
        this.nombre = nombre
        this.marca = new Marca(marca)
    }

    mostrarModelo(){
        return this
    }
}

module.exports = Modelo

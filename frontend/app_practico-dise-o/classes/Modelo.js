const Marca = require("./Marca")

class Modelo{
    constructor(nombre, marca){
        this.nombre = nombre
        this.marca = marca
    }

    mostrarModelo(modelo){
        modelo.marca.mostrarMarca()
        return this.nombre
    }
}

module.exports = Modelo

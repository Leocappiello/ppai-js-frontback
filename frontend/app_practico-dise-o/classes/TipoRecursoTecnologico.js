const RecursoTecnologico = require("./RecursoTecnologico")
const Modelo = require("./Modelo")
const Marca = require("./Marca")

class TipoRecursoTecnologico {
    constructor(nombre, descripcion) {
        this.nombre = nombre
        this.descripcion = descripcion
    }
    
    getNombre() {
        //6
        return this.nombre
    }

    buscarDatosRTSeleccionado() {
        //18.
        /*let recursoTec = new RecursoTecnologico('numeroRT',
            'fechaAlta',
            'imagenes',
            'periodicidadMantenimientoPrev',
            'duracionMatenimientoPrev',
            'fraccionHorarioTurnos',
        )

        */
        //for (const property in obj) {
        //recursoTec.mostrarRT()
        //}

        //19.
        let marca = new Marca("marca")
        let modelo = new Modelo("nombre", marca)

        //for (const property in obj) {
        modelo.mostrarModelo(modelo)
        //}
    }

    mostrarCategoria() {

    }
}

//
let RT = new TipoRecursoTecnologico("nombre", "descripcion")
RT.buscarDatosRTSeleccionado()
//

module.exports = TipoRecursoTecnologico
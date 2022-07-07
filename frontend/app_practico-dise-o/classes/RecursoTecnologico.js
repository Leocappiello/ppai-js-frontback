const TipoRecursoTecnologico = require('./TipoRecursoTecnologico')

class RecursoTecnologico {
    constructor(
        id,
        name,
        modelo,
        marca,
        type,
        features,
        estado,
        nroInventory,
        fechaAlta,
        respTecRecurso,
        disponibility,
        pathImages,
    ) {
        this.id = id,
        this.name = name,
        this.modelo = modelo,
        this.marca = marca,
        this.type = type,
        this.features = features,
        this.estado = estado,
        this.nroInventory = nroInventory,
        this.fechaAlta = fechaAlta,
        this.respTecRecurso = respTecRecurso,
        this.disponibility = disponibility,
        this.pathImages = pathImages
    }

    buscarTipoRT(nombre, descripcion) {
        //5
        let tipoRT = new TipoRecursoTecnologico(nombre, descripcion)
        return tipoRT.getNombre()
    }

    mostrarRT() {
        return this.numeroRT
    }

    habilitar() {

    }

    conocerCategoria() {

    }

    conocerCaracteristicaRecurso() {

    }

    miModeloYMarca() {

    }

    nuevoMantenimientoPreventivo() {

    }

    misTurnosDisponibles() {

    }
}

module.exports = RecursoTecnologico
const dataRT = require('../data/dataRT.json')

class CentroInvestigacion {
    constructor(
        nombre,
        sigla,
        direccion,
        edificio,
        piso,
        coordenadas,
        telefonosContacto,
        correoElectronico,
        numeroResolucionCreacion,
        fechaResolucionCreacion,
        reglamento,
        caracteristicasGenerales,
        fechaAlta,
        tiempoAntelacionReserva,
        fechaBaja,
        motivoBaja,
        recursosTecnologicos
    ) {
        this.nombre = nombre
        this.sigla = sigla
        this.direccion = direccion
        this.edificio = edificio
        this.piso = piso
        this.coordenadas = coordenadas
        this.telefonosContacto = telefonosContacto
        this.correoElectronico = correoElectronico
        this.numeroResolucionCreacion = numeroResolucionCreacion
        this.fechaResolucionCreacion = fechaResolucionCreacion
        this.reglamento = reglamento
        this.caracteristicasGenerales = caracteristicasGenerales
        this.fechaAlta = fechaAlta
        this.tiempoAntelacionReserva = tiempoAntelacionReserva
        this.fechaBaja = fechaBaja
        this.motivoBaja = motivoBaja
        this.recursosTecnologicos = recursosTecnologicos
    }

    buscarDatosRTSeleccionado() {
        //17. metodo no esta en el dc
        let idRecursos = []
        let indexRecursos = []
        let arrRT = this.recursosTecnologicos.RT

        for(let elem in dataRT){
            idRecursos.push(dataRT[elem].id)
        }

        arrRT.map((elem) => {
            indexRecursos.push(idRecursos.indexOf(elem))
        })

        console.log(indexRecursos);
        for(let index in indexRecursos){
            console.log(dataRT[indexRecursos[index]]);
        }
    }

    mostrarCI() {
        return this.nombre
    }

    miDirectorActual() {
        return
    }

    misDirectores() {

    }

    estoyActivo() {

    }

    misCientificos() {

    }

    misCientificosActivos() {

    }

    misRecursosTecnologicos() {

    }

    miBaja() {

    }

}

module.exports = CentroInvestigacion
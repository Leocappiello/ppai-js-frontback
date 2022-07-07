const dataRT = require('../data/dataRT.json')
const {TipoRecursoTecnologico} = require('./RecursoTecnologico')
const AsignacionCientificoDelCI = require('./AsignacionCientificoDelCI')

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
        recursosTecnologicos,
        cientificos
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
        this.recursosTecnologicos = recursosTecnologicos,
        this.cientificos = cientificos
    }

    buscarDatosRTSeleccionado() {
        //17. metodo no esta en el dc
        let idRecursos = [] //todos los recursos
        let indexRecursos = [] //indices en la data
        let arrRT = this.recursosTecnologicos.RT //id del recurso

        for (let elem in dataRT) {
            idRecursos.push(dataRT[elem].id)
        }

        arrRT.map((elem) => {
            indexRecursos.push(idRecursos.indexOf(elem))
        })
        
        /*
        console.log(idRecursos, 'id todos los recursos');
        console.log(indexRecursos, 'posicion/es');
        console.log(arrRT, 'id');
        */
       
        let tiposRT = []
        for (let index in indexRecursos) {
            let tipoRT = new TipoRecursoTecnologico(dataRT[indexRecursos[index]].name, dataRT[indexRecursos[index]].name)
            tiposRT.push(tipoRT.buscarDatosRTSeleccionado(indexRecursos[index]))
        }
        return tiposRT
    }

    mostrarCI() {
        return this.nombre
    }

    buscarCientifico(){
        let asignacion = new AsignacionCientificoDelCI('', '')
        let cientificosLegajo = asignacion.buscarCientifico()
        return cientificosLegajo
    }

    buscarRT(legajos){
        let nuevosRecursos = []
        let recursos = this.cientificos
        
        for(let legajo in legajos){
            if(recursos.includes(legajos[legajo])){
                nuevosRecursos.push(legajos[legajo])
            }
        }
        
        return nuevosRecursos
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
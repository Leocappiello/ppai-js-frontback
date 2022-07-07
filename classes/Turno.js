//
const { convertToTimeStamp, convertToDate } = require('../utils/timestamp')
const CambioEstadoTurno = require('./CambioEstadoTurno')

class Turno {
    constructor(
        fechaGeneracion,
        diaSemana,
        fechaHoraInicio,
        fechaHoraFin,
        estado
    ) {
        this.fechaGeneracion = fechaGeneracion
        this.diaSemana = diaSemana
        this.fechaHoraInicio = fechaHoraInicio
        this.fechaHoraFin = fechaHoraFin,
        this.estado = estado
    }

    mostrarTurno() {
        return this
    }

    esFechaPosterior(fechaActual) {
        let myDate = this.fechaGeneracion.split("/");
        let newDate = (new Date(myDate[2], myDate[1] - 1, myDate[0]))
        let turnosArr = []

        newDate = newDate.toLocaleDateString('es-AR')

        if (convertToTimeStamp(newDate) > convertToTimeStamp(fechaActual)) {
            //console.log(nuevoTurno.fechaGeneracion, " MAYOR a fecha actual");
            turnosArr.push(this)
        } else {
            //console.log(nuevoTurno.fechaGeneracion, " MENOR a fecha actual");
        }
        //console.log(turnosArr);
        return turnosArr
    }

    estoyDisponible() {

    }

    reservarTurno(){
        this.getEstadoActual()
    }

    getEstadoActual(){
        //let cambioEstadoTurno = 
        //setFechaHoraFin()
        this.crearCambioEstado()
    }

    crearCambioEstado(){
        let cambioEstadoTurno = new CambioEstadoTurno()
    }
}

module.exports = Turno
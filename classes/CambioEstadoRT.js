const Estado = require('./Estado')

class CambioEstadoRT {
    constructor(
        fechaHoraDesde,
        fechaHoraHasta
    ) {
        this.fechaHoraDesde = fechaHoraDesde
        this.fechaHoraHasta = fechaHoraHasta
    }

    mostrarCambioEstadoRT() {
        return
    }

    getEstadoActual() {
        let estado = new Estado(
            'nombre',
            'descripcion',
            'ambito',
            'esReservable',
            'esCancelable')
        return estado.mostrarEstado()
    }

}

module.exports = CambioEstadoRT
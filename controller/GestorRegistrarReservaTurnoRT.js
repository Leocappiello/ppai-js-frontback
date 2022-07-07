const { Router } = require('express')
const router = Router()

//data
const dataRT = require('../data/dataRT.json')
const dataCI = require('../data/dataCI.json')

//
const { TipoRecursoTecnologico, RecursoTecnologico } = require('../classes/RecursoTecnologico')
//const  = require('../classes/RecursoTecnologico')
const Estado = require('../classes/Estado')
const CentroInvestigacion = require('../classes/CentroInvestigacion')
const Turno = require('../classes/Turno')


class GestorRegistrarReservaTurnoRT {
    constructor() {

    }

    tomarOpcionReservarTurnoRT() {
        //3
        let buscarTipo = this.buscarTipoRT()
        console.log("buscar tipos", buscarTipo);
        return buscarTipo
        let pantalla = new PantallaRegistrarReservaTurnoRT()
        //23
        pantalla.mostrarDatosRTSeleccionado(buscarTipo)
    }

    buscarTipoRT() {
        let arrRT = []
        let arrTiposRTUnicos = []
        let arrTiposRT = []

        for (let elem in dataRT) {
            let rt = new RecursoTecnologico(
                dataRT[elem].id,
                dataRT[elem].modelo,
                dataRT[elem].marca,
                dataRT[elem].name,
                dataRT[elem].type,
                dataRT[elem].features,
                //dataRT[elem].estado,
                new Estado(dataRT[elem].estado.nombre,
                    dataRT[elem].estado.descripcion,
                    dataRT[elem].estado.ambito,
                    dataRT[elem].estado.esReservable,
                    dataRT[elem].estado.esCancelable,
                ),
                dataRT[elem].nroInventory,
                dataRT[elem].fechaAlta,
                dataRT[elem].respTecRecurso,
                dataRT[elem].disponibility,
                dataRT[elem].pathImages,
                dataRT[elem].numeroRT,
            )
            arrRT.push(rt)
        }

        for (let rt in arrRT) {
            arrTiposRTUnicos.push(arrRT[rt].type)
        }

        arrTiposRTUnicos = [...new Set(arrTiposRTUnicos)]

        for (let tipo in arrTiposRTUnicos) {
            let tipoRT = new TipoRecursoTecnologico(
                arrTiposRTUnicos[tipo], arrTiposRTUnicos[tipo]
            )
            arrTiposRT.push(tipoRT.getNombre())
        }

        let pantalla = new PantallaRegistrarReservaTurnoRT()
        let mostrarTipo = pantalla.mostrarTipoRTParaSeleccion(arrTiposRT)
        return mostrarTipo
    }

    //10
    tomarSeleccionTipoRT(tipos) {
        let tipoSeleccionado = tipos[0] //ejemplo de seleccion
        let tomarSeleccion = this.buscarEstadoDisponible(tipoSeleccionado)
        return tomarSeleccion
    }

    //10
    buscarEstadoDisponible(tipoSeleccionado) {
        let estadosDisponibles = []
        let tipos = dataRT.filter(elem => elem.type == tipoSeleccionado)

        for (let elems in tipos) {
            let estado = new Estado(
                tipos[elems].estado.nombre,
                tipos[elems].estado.descripcion,
                tipos[elems].estado.ambito,
                tipos[elems].estado.esReservable,
                tipos[elems].estado.esCancelable
            );

            if (estado.esAmbitoRT() && estado.esDisponible()) {
                estadosDisponibles.push(tipos[elems])
            }
        }

        //13
        let buscarCI = this.buscarCI(estadosDisponibles)
        return buscarCI
    }

    buscarCI(seleccionado) {
        //14

        let centroInvestigacionObj = []
        let centroInvestigacionNombresArr = []

        for (let centro in dataCI) {
            let centroInvestigacion = new CentroInvestigacion(
                dataCI[centro].nombre,
                dataCI[centro].sigla,
                dataCI[centro].direccion,
                dataCI[centro].edificio,
                dataCI[centro].piso,
                dataCI[centro].coordenadas,
                dataCI[centro].telefonosContacto,
                dataCI[centro].correoElectronico,
                dataCI[centro].numeroResolucionCreacion,
                dataCI[centro].fechaResolucionCreacion,
                dataCI[centro].reglamento,
                dataCI[centro].caracteristicasGenerales,
                dataCI[centro].fechaAlta,
                dataCI[centro].tiempoAntelacionReserva,
                dataCI[centro].fechaBaja,
                dataCI[centro].motivoBaja,
                dataCI[centro].recursosTecnologicos,
                dataCI[centro].cientificos
            )

            centroInvestigacionNombresArr.push(centroInvestigacion.mostrarCI())
            centroInvestigacionObj.push(centroInvestigacion)
        }

        //15
        let buscarDatos = this.buscarDatosRTSeleccionadoSegunCI(centroInvestigacionObj, seleccionado)
        return buscarDatos
    }

    buscarDatosRTSeleccionadoSegunCI(centroInvestigacionObj, seleccionado) {
        //16
        //console.log(seleccionado)
        //console.log(centroInvestigacionObj);

        let centrosConRTDelTipo = []
        for (let centro in centroInvestigacionObj) {
            for (let elem in seleccionado) {
                if (centroInvestigacionObj[centro].recursosTecnologicos.RT.includes(seleccionado[elem].id)) {
                    centrosConRTDelTipo.push(centro)
                }
            }
        }
        centrosConRTDelTipo = [...new Set(centrosConRTDelTipo)]

        let centrosConRT = []
        for (let ind in centrosConRTDelTipo) {
            let {
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
            } = dataCI[centrosConRTDelTipo[ind]]

            let centro = new CentroInvestigacion(
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
            )
            centrosConRT.push(centro)
        }

        //console.log(seleccionado); //rt del tipo y disponibles
        //console.log(centrosConRT) //centros con esos recursos tecnologicos

        let centrosArr = []
        for (let centro in centrosConRT) {
            centrosArr.push(centrosConRT[centro].buscarDatosRTSeleccionado())
        }
        return centrosArr
    }

    verificarPerteneceCI(seleccion) {
        //console.log("seleccion",seleccion);

        let centrosConRT = []
        for (let obj in dataCI) {
            let {
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
            } = dataCI[obj]

            let centro = new CentroInvestigacion(
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
            )
            centrosConRT.push(centro)
        }

        let legajosCientificos

        for (let centro in centrosConRT) {
            legajosCientificos = centrosConRT[centro].buscarCientifico()
        }

        let recursosDelCI = []

        for (let centro in centrosConRT) {
            if (centrosConRT[centro].buscarRT(legajosCientificos).length > 0) {
                recursosDelCI = [...recursosDelCI, centrosConRT[centro].buscarRT(legajosCientificos)]
            }
        }

        console.log("recursos del CI", recursosDelCI);
        this.obtenerTurnosRTSeleccionado(seleccion)
    }

    obtenerTurnosRTSeleccionado(seleccion) {
        let fechaActual = this.getFechaActual();
        let horaActual = this.getHoraActual();
        //console.log(this.getFechaActual(),this.getHoraActual());

        let { id,
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
            pathImages } = seleccion[0]

        let recursos = new RecursoTecnologico(
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
            pathImages
        )

        let turnosPosteriores = recursos.getTurnosPosteriores(fechaActual, horaActual)
        let pantalla = new PantallaRegistrarReservaTurnoRT()
        pantalla.mostrarTurnosParaSeleccion(turnosPosteriores)
    }

    getFechaActual() {
        let date = new Date().toLocaleDateString();
        return date
    }

    getHoraActual() {
        let time = new Date().toLocaleTimeString();
        return time
    }

    tomarTurnoSeleccionado() {

    }

    buscarDatosTurnoSeleccionado(seleccion) {
        //console.log(this);
        //console.log(seleccion);
        let turno = seleccion
        turno.mostrarTurno()
        console.log("turno seleccionado", seleccion);

        let pantalla = new PantallaRegistrarReservaTurnoRT()
        pantalla.solicitarOpcionNotificacion()
        pantalla.solicitarConfirmacionDeReserva()
        this.registrarReservaParaCientifico(seleccion)
    }

    tomarOpcionNotificacionSelec() {

    }

    tomarConfirmacionReserva() {

    }

    registrarReservaParaCientifico(seleccionado) {
        let estado = new Estado(
            'no disponible',
            'no disponible',
            "ambito no disponible",
            false,
            true)
        estado.esAmbitoReserva()
        estado.esReservado()
        this.actualizarEstadoTurno(seleccionado, estado)
    }

    actualizarEstadoTurno(seleccionado, nuevoEstado) {
        //console.log("seleccionado desde actualizar", seleccionado);
        let turno = new Turno(seleccionado.fechaGeneracion,
            seleccionado.diaSemana,
            seleccionado.fechaHoraInicio,
            seleccionado.fechaHoraFin,
            nuevoEstado)
        console.log("turno a reservar",turno);
        turno.reservarTurno(seleccionado)
    }

    generarNotificacionMail() {

    }

    finCU() {

    }
}


class PantallaRegistrarReservaTurnoRT {
    constructor(

    ) {

    }

    opcionReservarTurnoRT() {
        console.log('1. se abre ventana y se toca opcion')
        //1
        return this.habilitarVentana()
    }

    habilitarVentana() {
        console.log('2. se habilita ventana y se llama gestor para traer rts')
        //2
        let gestor = new GestorRegistrarReservaTurnoRT()
        return gestor.tomarOpcionReservarTurnoRT()
    }

    mostrarTipoRTParaSeleccion(tipos) {
        //se obtiene seleccion

        //8
        let tomarSeleccion = this.tomarSeleccionTipoRT(tipos)
        return tomarSeleccion
    }

    tomarSeleccionTipoRT(tipos) {
        //9
        let gestor = new GestorRegistrarReservaTurnoRT()
        return gestor.tomarSeleccionTipoRT(tipos)
    }

    mostrarDatosRTSeleccionado(tiposAMostrar) {
        //console.log("tipos a mostrar", tiposAMostrar);
        this.tomarRTAUtilizar(tiposAMostrar)
    }

    tomarRTAUtilizar(tiposAMostrar) {
        let random = Math.floor(Math.random() * 1) //
        let gestor = new GestorRegistrarReservaTurnoRT()
        gestor.verificarPerteneceCI(tiposAMostrar[random])
    }

    mostrarTurnosParaSeleccion(turnosPosteriores) {
        //console.log("turnos posteriores", turnosPosteriores);
        let seleccion = turnosPosteriores[0]
        let gestor = new GestorRegistrarReservaTurnoRT()
        gestor.buscarDatosTurnoSeleccionado(seleccion)
    }

    tomarTurnoSeleccionado() {

    }

    solicitarOpcionNotificacion() {
        //
        let opcionNotificacion = ['email', 'whatsapp']
        return opcionNotificacion[0]
    }

    solicitarConfirmacionDeReserva() {
        let confirmacion = true
        return confirmacion
    }

}
//

//routes
router.get('/tipos', (req, res) => {
    pantalla = new PantallaRegistrarReservaTurnoRT()
    let response = pantalla.opcionReservarTurnoRT()
    console.log("respuesta", response);
    res.json(response)
})


module.exports = router, GestorRegistrarReservaTurnoRT, PantallaRegistrarReservaTurnoRT
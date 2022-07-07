//data
const dataRT = require('../data/dataRT.json')
const dataCI = require('../data/dataCI.json')

//
const RecursoTecnologico = require('../classes/RecursoTecnologico')
const Estado = require('../classes/Estado')
const CentroInvestigacion = require('../classes/CentroInvestigacion')
const TipoRecursoTecnologico = require('../classes/TipoRecursoTecnologico')


class GestorRegistrarReservaTurnoRT {
    constructor() {

    }

    tomarOpcionReservarTurnoRT() {
        //3
        this.buscarTipoRT()
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
                dataRT[elem].estado,
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

        //7
        let pantalla = new PantallaRegistrarReservaTurnoRT()
        pantalla.mostrarTipoRTParaSeleccion(arrTiposRT)
    }

    //10
    tomarSeleccionTipoRT(tipos) {
        let tipoSeleccionado = tipos[0] //ejemplo de seleccion
        this.buscarEstadoDisponible(tipoSeleccionado)
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
        this.buscarCI(estadosDisponibles)
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
                dataCI[centro].recursosTecnologicos
            )

            centroInvestigacionNombresArr.push(centroInvestigacion.mostrarCI())
            centroInvestigacionObj.push(centroInvestigacion)
        }

        //15
        this.buscarDatosRTSeleccionadoSegunCI(centroInvestigacionObj, seleccionado)
    }

    buscarDatosRTSeleccionadoSegunCI(centroInvestigacionObj, seleccionado) {
        //16
        /*
        console.log("del tipo seleccionado:");
        for (let elem in seleccionado) {
            console.log(seleccionado[elem].id);
        }
        for (let centro in centroInvestigacionObj) {
            console.log("rt de cada centro:");
            console.log(centroInvestigacionObj[centro].recursosTecnologicos.RT)
            console.log("numero de centro");
            console.log(centro);
        }
        */
        let centrosConRTDelTipo = []
        for (let centro in centroInvestigacionObj) {
            for (let elem in seleccionado) {
                //console.log(seleccionado[elem].type)
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
                recursosTecnologicos
            )
            centrosConRT.push(centro)
        }
        
        //console.log(seleccionado); //rt del tipo y disponibles
        //console.log(centrosConRT) //centros con esos recursos tecnologicos

        for(let centro in centrosConRT){
            centrosConRT[centro].buscarDatosRTSeleccionado()
        }
        
        
    }

    verificarPerteneceCI() {

    }

    obtenerTurnosRTSeleccionado() {

    }

    getFechaActual() {

    }

    getHoraActual() {

    }

    tomarTurnoSeleccionado() {

    }

    buscarDatosTurnoSeleccionado() {

    }

    tomarOpcionNotificacionSelec() {

    }

    tomarConfirmacionReserva() {

    }

    registrarReservaParaCientifico() {

    }

    actualizarEstadoTurno() {

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
        this.habilitarVentana()
    }

    habilitarVentana() {
        console.log('2. se habilita ventana y se llama gestor para traer rts')
        //2
        let gestor = new GestorRegistrarReservaTurnoRT()
        gestor.tomarOpcionReservarTurnoRT()
    }

    mostrarTipoRTParaSeleccion(tipos) {
        //se obtiene seleccion

        //8
        this.tomarSeleccionTipoRT(tipos)
    }

    tomarSeleccionTipoRT(tipos) {
        //9
        let gestor = new GestorRegistrarReservaTurnoRT()
        gestor.tomarSeleccionTipoRT(tipos)
    }

    mostrarDatosRTSeleccionado() {

    }

    tomarRTAUtilizar() {

    }

    mostrarTurnosParaSeleccion() {

    }

    tomarTurnoSeleccionado() {

    }

    solicitarOpcionNotificacion() {

    }

    solicitarConfirmacionDeReserva() {

    }

}

//
pantalla = new PantallaRegistrarReservaTurnoRT()
pantalla.opcionReservarTurnoRT()

module.exports = { GestorRegistrarReservaTurnoRT, PantallaRegistrarReservaTurnoRT }
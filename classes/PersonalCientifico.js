class PersonalCientifico {
    constructor(
        legajo,
        nombre,
        apellido,
        nroDocumento,
        correoElectronicoInstitucional,
        correoElectronicoPersonal,
        telefonoCelular,
    ) {
        this.legajo = legajo
        this.nombre = nombre
        this.apellido = apellido
        this.nroDocumento = nroDocumento
        this.correoElectronicoInstitucional = correoElectronicoInstitucional
        this.correoElectronicoPersonal = correoElectronicoPersonal
        this.telefonoCelular = telefonoCelular
    }

    mostrarPersonalCientifico(){
        return this.legajo
    }

    inhabilitarUsuario(){

    }

    habilitarUsuario(){

    }

    tengoUsuarioHabilitado(){

    }

    mostrarMisNovedades(){

    }
}

module.exports = PersonalCientifico
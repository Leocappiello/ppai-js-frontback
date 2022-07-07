const dataCientificos = require('../data/dataCientificos.json')
const PersonalCientifico = require('./PersonalCientifico')

class AsignacionCientificoDelCI {
    constructor(
        fechaDesde,
        fechaHasta
    ) {
        this.fechaDesde = fechaDesde,
            this.fechaHasta = fechaHasta
    }

    mostrarCientificoDelCI() {

    }

    esCientificoActivo() {

    }

    misTurnos() {

    }

    //
    buscarCientifico() {
        //console.log(this);
        let cientificosArr = []

        for (let cientifico in dataCientificos) {
            let {
                legajo,
                nombre,
                apellido,
                nroDocumento,
                correoElectronicoInstitucional,
                correoElectronicoPersonal,
                telefonoCelular,
            } = dataCientificos[cientifico]

            let personal = new PersonalCientifico(
                legajo,
                nombre,
                apellido,
                nroDocumento,
                correoElectronicoInstitucional,
                correoElectronicoPersonal,
                telefonoCelular,
            )
            cientificosArr.push(personal.mostrarPersonalCientifico())
        }
        return cientificosArr
    }
}

module.exports = AsignacionCientificoDelCI
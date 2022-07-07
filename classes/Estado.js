class Estado {
    constructor(nombre, descripcion, ambito, esReservable, esCancelable){
        this.nombre = nombre
        this.descripcion = descripcion
        this.ambito = ambito
        this.esReservable = esReservable
        this.esCancelable = esCancelable
    }

    mostrarEstado(){
        return this.nombre
    }

    esAmbitoRT(){
        //11
        let esAmbito = (this.ambito == 'ambito disponible' ? true : false)
        return esAmbito
    }

    esDisponible(){
        //12
        let esDisponible = (this.nombre == 'disponible') ? true : false
        return esDisponible
    }

    esAmbitoReserva(){

    }

    esReservado(){
        
    }
}

module.exports = Estado
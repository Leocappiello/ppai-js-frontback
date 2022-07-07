class Address {
    direccion: string
    constructor(direccion){
        this.direccion = direccion
    }

    mostrarDireccion(){
        return this.direccion
    }
}

class Empleado {
    private nombre: string
    private apellido: string
    private direccion: Address
    constructor(nombre, apellido, direccion){
        this.nombre = nombre 
        this.apellido = apellido
        this.direccion = direccion
    }

    mostrarDire(){
        return this.direccion
    }
}

let dire = new Address("av siempre viva")
let emple = new Empleado("aldo", "lal", dire)

console.log(emple);
console.log(dire.mostrarDireccion());
console.log(emple.mostrarDire().direccion);
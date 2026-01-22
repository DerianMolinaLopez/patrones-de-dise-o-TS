import Computer from './Computer.ts';

/*
* El builder es una capa de creacion la cual se puede describir de la siguiente
* manera:
* 1. Se tiene una clase builder con un atributo privado de la clase a la cual
* le vamos a querer hacer las modificaciones.
*
* 2. La clase builder tiene metodos set pero que realiza la modificacion
* del mismo objeto que tienen en privado, como si fuerna metodos getter y setter
* pero para un nivel mas alto en la funcion.
*
* 3.El metodo builder contiene un metodo que nos permite regresar el mismo
* objeto el cual le acabamos de realizar la modificacion
*
* NOTA: Cada uno de los metodos para especificar informacion, tienen como
* valor de salida el mismo objeto de builder, por ejemplo la palabra reservada
* this
* */


export class ComputerBuilder {
  private computer: Computer = new Computer()

  constructor() {

  }

  setCpu(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }
  setRam(ram:string):ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }
  setStorage(storage:string):ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  build(){
    return this.computer;
  }

}

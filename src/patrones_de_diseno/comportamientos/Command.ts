/*
Es un patron que encapsula una solicitud como un objeto,
lo que nos permite parametrizzar otros objhetos con 
diferentes solicitudes,  encolar solicitudes, y soporta operaciones
que pueden deshacerse

Es util cuando se requiere de desacoplar el objeto que invoca la operacion del 
que sabe como realizarla
*/

interface Command {
    execute():void
}

class Light{
    turnOn():void{
        console.log("La luz esta encendida")
    }
    turnOff(){
        console.log("La luz esta apagada")
    }
}

class Fan{
    turnOn():void{
        console.log("el ventilador esta encendido")
    }
    turnOff(){
        console.log("el ventilador esta apagado")
       
    }
}
//comandos

class LightOnCommand implements Command{
   
    constructor(private light:Light){
     
    }

    execute(){
   this.light.turnOn();
    }

}
class LightOffCommand implements Command{
   
    constructor(private light:Light){
     
    }

    execute(){
   this.light.turnOff();
    }

}


class RemnoteControl{
    private commands:Record<string,Command> = {}
     setCommand(button:string, command:Command){
        this.commands[button] = command
     }

     pressButton(button:string):void{
        if(this.commands[button]){
            this.commands[button].execute()
           return;
        }
        console.log("Boton no reconocido")
     }
}



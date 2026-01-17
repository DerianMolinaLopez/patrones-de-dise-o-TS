import PopCornMaker from "./classes/PopCornMaker";
import Projector from "./classes/Projector";
import SoundSystem from "./classes/SoundSystem";
import VideoPlayer from "./classes/VideoPlayer";
/*
El patron fachada es basicamente como "armar el contexto de un sub sistema"
homologamente algo similar como spring crea su contexto de clases de los beans,
el patorn fachada provee, una interfaz que contiene una cantidad de clases
"complejas" para poder crear una serie de objetos de una pequeña parte del sistema.

El hecho que sea de esta manera, me suena mas a que es para objetos inmutables
que no varian demaciado, ya que tienen informacion por defecto que puede ser
leida desde las variables de entorno
*/



export interface HomeTheaterOptions {//Hay que verlo como si fuera un boton de encendido, lo demas son configuraciones
     projector:Projector
     soundSystem:SoundSystem
     popMaker: PopCornMaker
     videoplayer:VideoPlayer
}

export default class HomeTheaterFacade{
    private projector:Projector
    private soundSystem:SoundSystem
    private popMaker: PopCornMaker
    private videoplayer:VideoPlayer

    constructor({projector, soundSystem, popMaker, videoplayer}:HomeTheaterOptions){
        this.projector = projector
        this.soundSystem = soundSystem
        this.popMaker = popMaker
        this.videoplayer = videoplayer

    }

    watchMovie(movie:string){
        console.log('preparando para ver la pelicula')
        this.projector.turnOn()
        this.soundSystem.on()
        this.popMaker.on()
        this.videoplayer.on()
        this.videoplayer.play(movie)
        console.log( 'Estamos listos para ver la pelicula')
    }
    endWatchMovie(){
        console.log('apagando cada una de las maquinas')
        this.projector.turnOff()
        this.soundSystem.off()
        this.popMaker.off()
        this.videoplayer.off()
    }

}

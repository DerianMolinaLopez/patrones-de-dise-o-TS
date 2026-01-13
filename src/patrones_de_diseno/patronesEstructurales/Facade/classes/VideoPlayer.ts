export default class VideoPlayer{
    on(){
        console.log('el video player esta encendido')
    }

    play(movie:string){
        console.log('reporduciendo la pelicula ' + movie)
    }
    stop(){
        console.log('La pelicula esta detenida')
    }
    off(){
        console.log('el video player esta apagado')
    }


}

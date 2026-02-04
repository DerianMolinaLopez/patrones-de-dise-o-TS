/*
 *
 *Patron de comportamiento basado en la observacion
 *sel cambio de un objeto, para la modificacion o 
 *acciones que requiera el sistema
 *
 *
 *
 *
 * */

interface Observer {
  notify(videoTitle: string): void
}

class YoutubeChannel {
  private suscribers: Observer[] = []
  private name: string
  constructor(name: string) {
    this.name = name
  }

  suscribe(observer: Observer): void {
    this.suscribers.push(observer)
    console.log(`Nuevo suscripptor al canal ${this.name}`)
  }

  unsuscribe(observer: Observer) {
    this.suscribers = this.suscribers.filter(sub => sub !== observer)
    console.log(`Se ha anulado la sucripcion un usuario del canal ${this.name}`)
  }
  uploadVideo(videoTitle: string) {
    console.log("Hay un nuevo video ppublicado: " + videoTitle)

    for (const suscriber of this.suscribers) {
      suscriber.notify(videoTitle)
    }
  }
}

class Suscriber implements Observer {
  private name: string

  constructor(name: string) {
    this.name = name

  }

  notify(videoTitle: string): void {
    console.log(`Un canal ha subido un nuevo video llamado ${videoTitle}`)
  }
}

function main() {

  const channel = new YoutubeChannel('Memes derian')

  const melissa = new Suscriber('melissa')
  const juanPablo = new Suscriber('juan pablo')


  channel.suscribe(melissa)
}
main()

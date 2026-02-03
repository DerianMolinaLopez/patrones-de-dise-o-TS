
/*
 *
 *Como otros patrones de diseño que se
 * havisto, este tipo de patron se basa
 *en el guardado de estados de un elemento en concreto
 *a lo mejor queremos guardar una sesion o un
 * momento importante en el que requiera una copia
 * asi que este tipo de potron es el indicado
 * */

class GameMemento {
  private level: number
  private health: number
  private position: string

  constructor(level: number, health: number, position: string) {
    this.level = level
    this.health = health
    this.position = position


  }

  getLevel() {
    return this.level
  }

  gePosition() {
    return this.position
  }

  getHealth() {
    return this.health


  }
}
class Game {
  private level: number
  private health: number
  private position: string

  constructor(level: number, health: number, position: string) {
    this.level = level
    this.health = health
    this.position = position
    console.log("jugando en el nivel " + this.level + "n\"" + "salud:" + this.health + "posicion:" + this.position)
  }

  save(): GameMemento {
    //DEVOLVEMOS UNA COPIA
    return new GameMemento(this.level, this.health, this.position)
  }

  play() {
    console.log("iniciando el juego")
  }
  restore(memento: GameMemento) {
    this.level = memento.getLevel()
    this.position = memento.gePosition()
    this.health = memento.getHealth()

    console.log("partida restaurada")
  }
}

class GameHistory {
  private levl: number
  private position: string
  private health: number

  consturctor(game: GameMemento) {
    this.health = game.getHealth()
    this.levl = game.getLevel()
    this.health = game.getHealth()
  }


}

function main() {
  const game = new Game(10, 10, "Ciudad capital")
  const history = new GameHistory(game)
  console.log(game)

  console.log("Hola mundo")
}
main()

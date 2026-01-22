/*
Algo similar a los servidores, los proxys
son representaciones de algunos objetos, sin
embargo este intermediario, antes o despues realiza
una accion, como una regla de negocio o algo referente
al componente.

Al final del dia no estas interactuando con el
objeto original, si no una representacion
del mismo que ese, si trabaja con el objeto
original
*/

class Player {
  private name: string
  private level: number

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  getName(): string {
    return this.name
  }
  getLevel(): number {
    return this.level
  }
}

interface Room {
  
  enter(player: Player): void;
}


class SecretRoom implements Room {
  enter(player: Player) {
    console.log(`Entering secret room with player: ${player.getName()}, Level: ${player.getLevel()}`);

  }
}

//clase del proxy
class MagicPortal implements Room {
  //el objeto que viene como argumento en la constreuccion de este proxy
  //debe ser un objeto que satisfaga las reglas de seguridad para que el
  //usuario pueda pasar
  private readonly room: Room

  constructor(room: Room) {
    this.room = room;
  }

  enter(player: Player) {
    if (player.getLevel() >= 10) {
      console.log(`Entering magic portal with player: ${player.getName()}, Level: ${player.getLevel()}`);
      this.room.enter(player);
    } else {
      console.log(`Player ${player.getName()} is not allowed to enter the magic portal.`);
    }
  }
}


function main() {
  const portal = new MagicPortal(new SecretRoom());
  const player = new Player("Derian", 2);
  portal.enter(player);
}
main()

/*
En resumen es eso, un objetro que interactua
con el objeto original
*/

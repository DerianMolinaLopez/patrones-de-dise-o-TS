import Ability from '../interfaces/Ability.ts';

export default class SwordAttack implements Ability {
  use(): void {
    console.log("Ataque con espada")
  }
}
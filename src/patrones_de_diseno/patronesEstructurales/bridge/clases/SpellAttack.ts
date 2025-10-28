import Ability from '../interfaces/Ability.ts';

export default class SpellAttack implements Ability {
  use(): void {
    console.log("Ataque variante")
  }
}
import Character from './Character.ts';
import Ability from '../interfaces/Ability.ts';

export class Warrior extends Character {//codigo propio para un objeto propio de Warrior
  constructor(ability: Ability) {
    super(ability);
  }
  performAbility(): void {
    console.log("El luchador esta preparado")
    this.ability.use()
  }
}

export class Mago extends  Character{ //codigo propio de mago
  constructor(ability: Ability) {
    super(ability);
  }
  performAbility(): void {
    console.log("El mago esta preparado")
    this.ability.use()
  }
}


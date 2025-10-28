import Ability from '../interfaces/Ability.ts';

abstract class Character{
  protected ability:Ability
  constructor(ability:Ability) {
    this.ability = ability
  }

  setAbility(ability:Ability) {
    this.ability = ability
  }
  getAbility(){
    return this.ability;
}

abstract  performAbility():void;

}

export default Character;
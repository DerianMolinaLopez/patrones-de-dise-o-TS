import { Warrior } from './clases/Warrior.ts';
import Ability from './interfaces/Ability.ts';
import SwordAttack from './clases/SwordAttack.ts';
import SpellAttack from './clases/SpellAttack.ts';

function main(){
  const ability:Ability = new SwordAttack();
  const warrior:Warrior = new Warrior(ability);
  warrior.performAbility()

  //-----------------

  const ability2:Ability = new SpellAttack();
  const variante:Warrior = new Warrior(ability2);
  variante.performAbility()



}
main()
import Restaurant from '../Factory/Restaurant.ts';
import Drink from '../interfaces/Drink.ts';
import Hamburger from '../interfaces/Hamburger.ts';
import ChickenHamburguer from '../classes/ChickenHamburguer.ts';

import Water from '../classes/Water.ts';

export default class HeartwoodRestaurantFactory implements Restaurant {
  createHamburguer(): Hamburger {
    return new ChickenHamburguer()
  }
  createDrink(): Drink {
    return new Water()
  }
}
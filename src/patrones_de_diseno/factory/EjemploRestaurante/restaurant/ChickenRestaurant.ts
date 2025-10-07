import Hamburger from '../Hamburger.ts';
import Restaurant from './Restaurant.ts';

import ChickenHamburger from '../ChickenHamburger.ts';

export default class ChickenRestaurant extends Restaurant {
  createHambuger(): Hamburger {
    return new ChickenHamburger()
  }
}
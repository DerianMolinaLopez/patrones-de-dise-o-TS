import Hamburger from '../Hamburger.ts';
import Restaurant from './Restaurant.ts';
import BeefHamburger from '../BeefHamburger.ts';

export default class BeefRestaurant extends Restaurant {
  createHambuger(): Hamburger {
    return new BeefHamburger()
  }
}
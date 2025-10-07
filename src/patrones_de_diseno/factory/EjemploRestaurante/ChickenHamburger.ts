import Hamburger from './Hamburger.ts';

export default class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("preparacion de una hamburguesa de pollo")
  }
}
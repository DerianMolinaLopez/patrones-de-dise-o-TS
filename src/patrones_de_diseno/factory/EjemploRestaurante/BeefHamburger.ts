import Hamburger from './Hamburger.ts';

export default class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("preparacion de una hamburguesa de carne")
  }
}
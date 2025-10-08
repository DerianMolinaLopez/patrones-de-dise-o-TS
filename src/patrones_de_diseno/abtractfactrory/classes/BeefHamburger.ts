import Hamburger from '../interfaces/Hamburger.ts';

export default  class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando Hamburguesa de carne")
  }
}
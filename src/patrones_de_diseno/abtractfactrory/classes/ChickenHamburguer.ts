import Hamburger from '../interfaces/Hamburger.ts';

export default class ChickenHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando Hamburguesa de pollo")
  }
}
import Drink from '../interfaces/Drink.ts';

export default  class Soda implements Drink {
  pour(): void {
    console.log("sirviendo un refresco")
  }
}
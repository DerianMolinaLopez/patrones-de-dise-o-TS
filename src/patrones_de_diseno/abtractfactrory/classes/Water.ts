import Drink from '../interfaces/Drink.ts';

export default  class Water implements Drink {
  pour(): void {
    console.log("sirviendo agua")
  }
}
import Hamburger from '../Hamburger.ts';

abstract class Restaurant{
  abstract createHambuger():Hamburger
  orderHamburguer():void{
    const hamburguer = this.createHambuger();
    hamburguer.prepare()
  }
}
export default  Restaurant;
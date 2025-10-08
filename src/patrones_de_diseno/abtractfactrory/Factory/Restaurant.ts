import Hamburger from '../interfaces/Hamburger.ts';
import Drink from '../interfaces/Drink.ts';

export default interface AbstractFactory{
  createHamburguer():Hamburger
  createDrink():Drink
}
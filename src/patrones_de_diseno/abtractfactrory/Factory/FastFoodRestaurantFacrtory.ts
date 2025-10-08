import Hamburger from '../../factory/EjemploRestaurante/Hamburger.ts';


import Restaurant from '../Factory/Restaurant.ts';
import Drink from "../interfaces/Drink.ts";
import BeefHamburger from '../../factory/EjemploRestaurante/BeefHamburger.ts';
import Soda from '../classes/Soda.ts';


/*
* Podriamos decir que toda clase que se instancie
* por medio de esta fabrica, es porque corresponde a la misma
* familia de objetos relacionados
* */
export default class FastFoodRestaurantFacrtory implements Restaurant {
    createHamburguer(): Hamburger {
       return new BeefHamburger()
    }
    createDrink(): Drink {
        return new Soda()
    }

}
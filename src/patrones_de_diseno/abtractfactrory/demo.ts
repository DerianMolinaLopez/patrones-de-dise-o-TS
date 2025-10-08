
import AbstractFactory from './Factory/Restaurant.ts';
import FastFoodRestaurantFacrtory from './Factory/FastFoodRestaurantFacrtory.ts';

/*
* Lo que determina si un objeto instancia una serie de
* clases de x familia, depende fuertemente de los valores
* que vengan de entrada, la forma de usar la fabrica abstracta
* es usando el metodo mas generico en el argumento de la funcion
* pero en el argumento de entrada al invocar la funcion, mandamos
* una clase que implemente nuestra fabrica, de esa manera nosotros
* no sabemos que tipo de objetos se van a utilizar, lo que
* si nos permite saber, es el objeto que fue enviado por entrada
*
* */
function main(factory:AbstractFactory){

    const hamburger = factory.createHamburguer()
    const drink = factory.createDrink()


  hamburger.prepare()
  drink.pour()

}

main(new FastFoodRestaurantFacrtory())
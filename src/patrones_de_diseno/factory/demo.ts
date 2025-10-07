import Restaurant from './EjemploRestaurante/restaurant/Restaurant.ts';
import BeefRestaurant from './EjemploRestaurante/restaurant/BeefRestaurant.ts';
import ChickenRestaurant from './EjemploRestaurante/restaurant/ChickenRestaurant.ts';

function main(){
  let restaurant:Restaurant;
 const burgerOptpon = '2'

  switch (burgerOptpon){
   case "1"://carne
     restaurant = new BeefRestaurant()
     break
   case "2"://pollo
     restaurant = new ChickenRestaurant()
     break
    default:
      console.error("opcion no valida")
      break

 }
  restaurant.orderHamburguer()
}
main()
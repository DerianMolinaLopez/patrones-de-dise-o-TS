# Patrones de diseño
## 1. Patron Builder
Es para la construccion de objetos complejos que requieren de cierta
anidacion de cada uno de los atributos que lo conforman, basicamente es
un proceso el cual, primeramente creas el constructor para el objeto 
tiene sa complejidad, entonces esta clase que lo envuelve tiene
una serie de metodos que asigna informacion al objeto, eso si
se podria definir informacion por defecto para evitar la existencia
de objetos de tipo null.

## 2. Patron factory
Patron de diseño encargado de creear una instancia en especifico cuando se tienen
objetos con las mismas acciones pero la diferencia es la finalidad para lo que 
esa clase fue realizada. Dentro de la logica del patron, tu no sabes qeu objeto vas 
a instanciar a no ser que sepas cual es la entrada de datos, ya que en el metodo
de fabricacion(main) se hace una diferencia de el como se instancian las clases
dependiendo de cierta condicion.
# Patrones de diseño
## 1. Patron Builder
Es para la construccion de objetos complejos que requieren de cierta
anidacion de cada uno de los atributos que lo conforman, basicamente es
un proceso el cual, primeramente creas el constructor para el objeto 
tiene sa complejidad, entonces esta clase que lo envuelve tiene
una serie de metodos que asigna informacion al objeto, eso si
se podria definir informacion por defecto para evitar la existencia
de objetos de tipo null.
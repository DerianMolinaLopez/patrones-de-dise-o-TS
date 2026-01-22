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

## 3. Abstarct factory
Es un patron de diseño enfocado a las familias de datos similares
puede haber un objeto de naturaleza x, pero de ese x exitienden
y,z y w, entgonces todo objeto de y z w, pertenecen a un universo en 
comun que es x, este patron tiene en cuenta eso y dependiendo de la
familia de objetos que quieras crear, esta te proveera de forma
abstracta la creacion de los mismos sin tener que saber que es
lo que vas a instanciar, eso lo determina la entrada de datos.

## 4. Patron prototype
Es un patron de diseño que se basa en la copia de un elemento sin tener
que perder el tipo de dato del objeto, en lenguajes como TS o JS es facil
que un objeto pierda su referencia, pero en lenguajes mas orientados a objetos
mantienen el tipo de dato y te otorga una copia mutable del objeto, 
el patron consiste en la creacion de copias.

## 5. Inmutabilidad con copia
Es un patron de diseño qeu se basa en establecer copias de un objeto
es una variante del patron prototype, pero sirve bastante para la
creacion de estados de un objeto, historiales para la telemetria,
guardado de logs de tiempo de ejecucion etc.

## 6.Patron singleton
El patron de singleton sirve para poder crear de forma global,
crear una clase que solamente exista una unica instancia
para controlar la forma como se manda a llamar.
Este patron de diseño es un poco controversial por violar
el principio de responsabilidad uncia, por una parte crea el
objeto y por otra se encarga de que no exista instancia
en el sistema


# Patrones estructurales
## 1. Patron adaptador
El patron adaptador es un tipo de patron estructural que pretende hacer compatibles
a las interfaces que son incompatibles, este tipo de patrones consiste en crear una
interfaz con la ologica que se quiere implementar, y de esos metodos solamente se va a
tomar los metodos deseados por una lirberia de terceros. De esa manera se puede
conseguir que el codigo de la libreria no se mezcle con el codigo del equipo de
desarrollo.

## 2.Patron Bridge
Es un patron de diseño dedicado para el escalado de clases, desacopla una clase 
que ya sea bastante grande y por medio de una interfgaz  clase abstracta, se 
realizan los cambios, la clase abstracta depende del objeto que implemente la interfaz,
cambiando la naturaleza del objeto con un solo cambio en el codigo.
Este patron de diseño es util a la hora de descomponer clases, en familias de clases
que al final del dia todas juntas forman una sola.
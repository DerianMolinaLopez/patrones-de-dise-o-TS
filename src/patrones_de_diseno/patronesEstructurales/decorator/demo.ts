/*
!Patron decorador
Es un patron de diseño estructural para agregar
funcionalidades a objetos, la forma como funciona
es colocando el objeto basem dentro de un objeto
que envuelve aloriginal, manteneindo la separacion
de la responasbilidad del objeto original con
el objeto con el que fue decorado

Es muy bueno cuando es necesario agregar funciones
de forma dinamica

Este es un proceso de agregacion, se podria conseguir
por medio de la herencia, pero es mucho mas complicado
debido a que no existe la herencia multiple en varios
lenguajes de programacion
*/

import EmailDecorator from "./classes/EmailDecorator"

let notification:Notifications = new BasicNotification()
notification.send("Alerta de sistema")


notification = new EmailDecorator(notification)//envoltorio de la clase
notification.send("Alerta de sistema")//ahora envia por correo electornico y notificacion basica

abstract class NotificationDecorator implements Notifications{

    protected notification:BasicNotification

   constructor(notification:BasicNotification){
        this.notification = notification;
   }
    send(message:string):void{ //metodo de la clase envoltoria, a su vez el metodo envuelve el metodo de mas bajo nivel
        this.notification.send(message)
   }

}

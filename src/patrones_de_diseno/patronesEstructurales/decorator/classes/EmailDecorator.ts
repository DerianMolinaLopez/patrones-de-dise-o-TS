export default class EmailDecorator extends NotificationDecorator {

    constructor(notification:BasicNotification) {
        super(notification);
    }

    send(message: string): void {
        console.log("Enviando notificacion basica desde el correo");
        super.send(message);
        this.sendEmail(message);
    }
    private sendEmail(message:string) :void{
        console.log("Enviando correo electronico: "+message);
    }
}

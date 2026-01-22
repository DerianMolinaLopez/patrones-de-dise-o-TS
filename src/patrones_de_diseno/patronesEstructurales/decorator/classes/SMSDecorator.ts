export default class SMSDecorator extends NotificationDecorator {

    constructor(notification:BasicNotification) {
        super(notification);
    }

    send(message: string): void {
        console.log("Enviando notificacion basica desde el SMS");
        super.send(message);
        this.sendSMS(message);
    }
    private sendSMS(message:string) :void{
        console.log("Enviando SMS: "+message);
    }
}

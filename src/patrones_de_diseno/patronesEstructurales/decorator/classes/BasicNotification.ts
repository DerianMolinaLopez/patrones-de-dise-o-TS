class BasicNotification implements Notifications {

    send(message: string): void {
        throw new Error("Enviando notificacion basica: "+{message});
    }


}

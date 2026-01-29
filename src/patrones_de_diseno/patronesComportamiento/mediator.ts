/*
Es un patrn de comportamiento que
funciona como mediador entre dos intancias
de objetos, eliminando redundnacia y ahorrar recursos,
como lo seria la duplicidad de los mimsos mensaje que se muestarn en
este ejemplo
*/

class User {
  private username: string
  private chatRoom: ChatRoom

  constructor(username: string, chatRoom: ChatRoom) {
    this.username = username
    this.chatRoom = chatRoom
  }

  getUsername(): string {
    return this.username
  }

  sendMessage(message: string) {

    const log = "Usuario:" + this.getUsername() + "envio el mensjae:\n" + message
    this.chatRoom.sendMessage(this, log)
  }
}
class ChatRoom {
  private users: User[] = []
  public title: string

  constructor(title: string) {
    this.title = title

  }
  addUser(user: User) {
    this.users.push(user)
  }

  sendMessage(sender: User, message: string): void {
    const usersToSend = this.users.filter(user => user !== sender)

    for (const user of usersToSend) {
      console.log(`${user.getUsername()} receives message from ${sender.getUsername()}: ${message}`)
    }
  }
}


function main() {
  const chatRoom = new ChatRoom("Sala de chat")
  const user1 = new User("User1", chatRoom)
  const user2 = new User("User2", chatRoom)

  chatRoom.addUser(user1)
  chatRoom.addUser(user2)

  user1.sendMessage("Hola, ¿cómo están?")
}
main()

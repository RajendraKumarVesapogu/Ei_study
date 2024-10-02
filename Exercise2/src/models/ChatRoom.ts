import { MessageNotifier } from "../services/MessageNotifier";
import { User } from "./User";

export class ChatRoom {
    private roomId: string;
    private users: Set<User>;
    private messages: string[];
  
    constructor(roomId: string) {
      this.roomId = roomId;
      this.users = new Set();
      this.messages = [];
    }
  
    public addUser(user: User): void {
      this.users.add(user);
      this.notifyAll(`${user.getName()} has joined the room.`);
    }
  
    public removeUser(user: User): void {
      this.users.delete(user);
      this.notifyAll(`${user.getName()} has left the room.`);
    }
  
    public addMessage(user: User, message: string): void {
      const formattedMessage = `[${user.getName()}]: ${message}`;
      this.messages.push(formattedMessage);
      this.notifyAll(formattedMessage);
    }
  
    public getMessages(): string[] {
      return this.messages;
    }
  
    private notifyAll(message: string): void {
      MessageNotifier.notify(this.roomId, message);
    }
  }
  
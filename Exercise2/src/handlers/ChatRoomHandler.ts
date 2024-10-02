import { User } from "../models/User";
import { ChatRoomManager } from "../services/ChatRoomManager";
import { MessageNotifier } from "../services/MessageNotifier";
import { Logger } from "../utils/Logger";

export class ChatRoomHandler {
  private chatRoomManager: ChatRoomManager;

  constructor() {
    this.chatRoomManager = ChatRoomManager.getInstance();
  }

  public joinRoom(roomId: string, user: User): void {
    const chatRoom = this.chatRoomManager.getOrCreateRoom(roomId);
    chatRoom.addUser(user);
    MessageNotifier.subscribe(roomId, (message) => {
      Logger.log(message);
    });
  }

  public sendMessage(roomId: string, user: User, message: string): void {
    const chatRoom = this.chatRoomManager.getOrCreateRoom(roomId);
    chatRoom.addMessage(user, message);
  }
}

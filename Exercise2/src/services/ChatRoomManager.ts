import { ChatRoom } from "../models/ChatRoom";

export class ChatRoomManager {
    private static instance: ChatRoomManager;
    private chatRooms: Map<string, ChatRoom>;
  
    private constructor() {
      this.chatRooms = new Map();
    }
  
    public static getInstance(): ChatRoomManager {
      if (!ChatRoomManager.instance) {
        ChatRoomManager.instance = new ChatRoomManager();
      }
      return ChatRoomManager.instance;
    }
  
    public getOrCreateRoom(roomId: string): ChatRoom {
      if (!this.chatRooms.has(roomId)) {
        this.chatRooms.set(roomId, new ChatRoom(roomId));
      }
      return this.chatRooms.get(roomId)!;
    }
  }
  
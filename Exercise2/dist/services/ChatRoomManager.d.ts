import { ChatRoom } from "../models/ChatRoom";
export declare class ChatRoomManager {
    private static instance;
    private chatRooms;
    private constructor();
    static getInstance(): ChatRoomManager;
    getOrCreateRoom(roomId: string): ChatRoom;
}

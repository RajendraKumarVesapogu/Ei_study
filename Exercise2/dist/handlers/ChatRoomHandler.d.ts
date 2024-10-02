import { User } from "../models/User";
export declare class ChatRoomHandler {
    private chatRoomManager;
    constructor();
    joinRoom(roomId: string, user: User): void;
    sendMessage(roomId: string, user: User, message: string): void;
}

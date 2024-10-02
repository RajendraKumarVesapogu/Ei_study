import { User } from "./User";
export declare class ChatRoom {
    private roomId;
    private users;
    private messages;
    constructor(roomId: string);
    addUser(user: User): void;
    removeUser(user: User): void;
    addMessage(user: User, message: string): void;
    getMessages(): string[];
    private notifyAll;
}

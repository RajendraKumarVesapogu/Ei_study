"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoom = void 0;
const MessageNotifier_1 = require("../services/MessageNotifier");
class ChatRoom {
    constructor(roomId) {
        this.roomId = roomId;
        this.users = new Set();
        this.messages = [];
    }
    addUser(user) {
        this.users.add(user);
        this.notifyAll(`${user.getName()} has joined the room.`);
    }
    removeUser(user) {
        this.users.delete(user);
        this.notifyAll(`${user.getName()} has left the room.`);
    }
    addMessage(user, message) {
        const formattedMessage = `[${user.getName()}]: ${message}`;
        this.messages.push(formattedMessage);
        this.notifyAll(formattedMessage);
    }
    getMessages() {
        return this.messages;
    }
    notifyAll(message) {
        MessageNotifier_1.MessageNotifier.notify(this.roomId, message);
    }
}
exports.ChatRoom = ChatRoom;
//# sourceMappingURL=ChatRoom.js.map
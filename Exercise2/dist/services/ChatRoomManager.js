"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomManager = void 0;
const ChatRoom_1 = require("../models/ChatRoom");
class ChatRoomManager {
    constructor() {
        this.chatRooms = new Map();
    }
    static getInstance() {
        if (!ChatRoomManager.instance) {
            ChatRoomManager.instance = new ChatRoomManager();
        }
        return ChatRoomManager.instance;
    }
    getOrCreateRoom(roomId) {
        if (!this.chatRooms.has(roomId)) {
            this.chatRooms.set(roomId, new ChatRoom_1.ChatRoom(roomId));
        }
        return this.chatRooms.get(roomId);
    }
}
exports.ChatRoomManager = ChatRoomManager;
//# sourceMappingURL=ChatRoomManager.js.map
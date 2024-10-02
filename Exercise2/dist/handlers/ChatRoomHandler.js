"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoomHandler = void 0;
const ChatRoomManager_1 = require("../services/ChatRoomManager");
const MessageNotifier_1 = require("../services/MessageNotifier");
const Logger_1 = require("../utils/Logger");
class ChatRoomHandler {
    constructor() {
        this.chatRoomManager = ChatRoomManager_1.ChatRoomManager.getInstance();
    }
    joinRoom(roomId, user) {
        const chatRoom = this.chatRoomManager.getOrCreateRoom(roomId);
        chatRoom.addUser(user);
        MessageNotifier_1.MessageNotifier.subscribe(roomId, (message) => {
            Logger_1.Logger.log(message);
        });
    }
    sendMessage(roomId, user, message) {
        const chatRoom = this.chatRoomManager.getOrCreateRoom(roomId);
        chatRoom.addMessage(user, message);
    }
}
exports.ChatRoomHandler = ChatRoomHandler;
//# sourceMappingURL=ChatRoomHandler.js.map
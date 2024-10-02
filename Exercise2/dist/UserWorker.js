"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const User_1 = require("./models/User");
const ChatRoomHandler_1 = require("./handlers/ChatRoomHandler");
const Mutex_1 = require("./utils/Mutex");
const mutex = new Mutex_1.Mutex();
const handler = new ChatRoomHandler_1.ChatRoomHandler();
const user = new User_1.User(process.env.USERNAME);
const roomId = 'Room123';
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const unlock = yield mutex.lock();
        try {
            handler.joinRoom(roomId, user);
            handler.sendMessage(roomId, user, `Hello from ${user.getName()}!`);
        }
        finally {
            unlock();
        }
        if (worker_threads_1.parentPort)
            worker_threads_1.parentPort.postMessage(`${user.getName()} completed.`);
    });
})();
//# sourceMappingURL=UserWorker.js.map
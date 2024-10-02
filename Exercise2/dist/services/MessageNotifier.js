"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageNotifier = void 0;
class MessageNotifier {
    static subscribe(roomId, callback) {
        var _a;
        if (!this.observers.has(roomId)) {
            this.observers.set(roomId, []);
        }
        (_a = this.observers.get(roomId)) === null || _a === void 0 ? void 0 : _a.push(callback);
    }
    static notify(roomId, message) {
        var _a;
        (_a = this.observers.get(roomId)) === null || _a === void 0 ? void 0 : _a.forEach(callback => callback(message));
    }
}
exports.MessageNotifier = MessageNotifier;
MessageNotifier.observers = new Map();
//# sourceMappingURL=MessageNotifier.js.map
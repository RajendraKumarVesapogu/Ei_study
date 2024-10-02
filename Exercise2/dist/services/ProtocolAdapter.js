"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolAdapter = exports.HTTPProtocol = exports.WebSocketProtocol = void 0;
class WebSocketProtocol {
    sendMessage(message) {
        console.log(`WebSocket: ${message}`);
    }
}
exports.WebSocketProtocol = WebSocketProtocol;
class HTTPProtocol {
    sendMessage(message) {
        console.log(`HTTP: ${message}`);
    }
}
exports.HTTPProtocol = HTTPProtocol;
class ProtocolAdapter {
    constructor(protocol) {
        this.protocol = protocol;
    }
    sendMessage(message) {
        this.protocol.sendMessage(message);
    }
}
exports.ProtocolAdapter = ProtocolAdapter;
//# sourceMappingURL=ProtocolAdapter.js.map
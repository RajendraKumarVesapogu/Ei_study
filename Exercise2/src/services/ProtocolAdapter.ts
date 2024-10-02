export interface Protocol {
    sendMessage(message: string): void;
}

export class WebSocketProtocol implements Protocol {
    sendMessage(message: string): void {
        console.log(`WebSocket: ${message}`);
    }
}

export class HTTPProtocol implements Protocol {
    sendMessage(message: string): void {
        console.log(`HTTP: ${message}`);
    }
}

export class ProtocolAdapter {
    private protocol: Protocol;

    constructor(protocol: Protocol) {
        this.protocol = protocol;
    }

    public sendMessage(message: string): void {
        this.protocol.sendMessage(message);
    }
}

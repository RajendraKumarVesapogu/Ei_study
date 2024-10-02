export interface Protocol {
    sendMessage(message: string): void;
}
export declare class WebSocketProtocol implements Protocol {
    sendMessage(message: string): void;
}
export declare class HTTPProtocol implements Protocol {
    sendMessage(message: string): void;
}
export declare class ProtocolAdapter {
    private protocol;
    constructor(protocol: Protocol);
    sendMessage(message: string): void;
}

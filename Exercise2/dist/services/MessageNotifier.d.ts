export declare class MessageNotifier {
    private static observers;
    static subscribe(roomId: string, callback: (message: string) => void): void;
    static notify(roomId: string, message: string): void;
}

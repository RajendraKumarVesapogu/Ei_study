export declare class Logger {
    private static instance;
    private constructor();
    static getInstance(): Logger;
    log(message: string): void;
}

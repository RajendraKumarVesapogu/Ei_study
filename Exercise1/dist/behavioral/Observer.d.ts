export interface Observer {
    update(eventType: string, message: string): void;
}
export declare class User implements Observer {
    private name;
    constructor(name: string);
    update(eventType: string, message: string): void;
}
export declare class NotificationService {
    private observers;
    subscribe(eventType: string, observer: Observer): void;
    notify(eventType: string, message: string): void;
}

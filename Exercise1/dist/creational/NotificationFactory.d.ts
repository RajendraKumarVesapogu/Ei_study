export interface MyNotification {
    sendNotification(message: string): void;
}
export declare class EmailNotification implements MyNotification {
    sendNotification(message: string): void;
}
export declare class SMSNotification implements MyNotification {
    sendNotification(message: string): void;
}
export declare class PushNotification implements MyNotification {
    sendNotification(message: string): void;
}
export declare class NotificationFactory {
    static createNotification(type: 'email' | 'sms' | 'push'): MyNotification;
}

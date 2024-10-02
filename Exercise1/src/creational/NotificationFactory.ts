export interface MyNotification{
    sendNotification(message: string): void;
}

export class EmailNotification implements MyNotification{
    sendNotification(message: string): void {
        console.log(`Email notification sent: ${message}`);
    }
}

export class SMSNotification implements MyNotification{
    sendNotification(message: string): void {
        console.log(`SMS notification sent: ${message}`);
    }
}

export class PushNotification implements MyNotification{
    sendNotification(message: string): void {
        console.log(`Push notification sent: ${message}`);
    }
}

export class NotificationFactory {
    static createNotification(type: 'email' | 'sms' | 'push'): MyNotification { 
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error(`Invalid notification type: ${type}`); 
        }
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = exports.PushNotification = exports.SMSNotification = exports.EmailNotification = void 0;
class EmailNotification {
    sendNotification(message) {
        console.log(`Email notification sent: ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
class SMSNotification {
    sendNotification(message) {
        console.log(`SMS notification sent: ${message}`);
    }
}
exports.SMSNotification = SMSNotification;
class PushNotification {
    sendNotification(message) {
        console.log(`Push notification sent: ${message}`);
    }
}
exports.PushNotification = PushNotification;
class NotificationFactory {
    static createNotification(type) {
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
exports.NotificationFactory = NotificationFactory;
//# sourceMappingURL=NotificationFactory.js.map
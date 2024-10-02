"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = exports.PushNotification = exports.SMSNotification = exports.EmailNotification = void 0;
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.sendNotification = function (message) {
        console.log("Email notification sent: ".concat(message));
    };
    return EmailNotification;
}());
exports.EmailNotification = EmailNotification;
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.sendNotification = function (message) {
        console.log("SMS notification sent: ".concat(message));
    };
    return SMSNotification;
}());
exports.SMSNotification = SMSNotification;
var PushNotification = /** @class */ (function () {
    function PushNotification() {
    }
    PushNotification.prototype.sendNotification = function (message) {
        console.log("Push notification sent: ".concat(message));
    };
    return PushNotification;
}());
exports.PushNotification = PushNotification;
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.createNotification = function (type) {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error("Invalid notification type: ".concat(type));
        }
    };
    return NotificationFactory;
}());
exports.NotificationFactory = NotificationFactory;

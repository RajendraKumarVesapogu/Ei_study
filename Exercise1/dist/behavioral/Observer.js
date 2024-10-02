"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    update(eventType, message) {
        console.log(`${this.name} received notification for ${eventType}: ${message}`);
    }
}
exports.User = User;
class NotificationService {
    constructor() {
        this.observers = {};
    }
    subscribe(eventType, observer) {
        if (!this.observers[eventType]) {
            this.observers[eventType] = [];
        }
        this.observers[eventType].push(observer);
    }
    notify(eventType, message) {
        if (this.observers[eventType]) {
            for (const observer of this.observers[eventType]) {
                observer.update(eventType, message);
            }
        }
    }
}
exports.NotificationService = NotificationService;
//# sourceMappingURL=Observer.js.map
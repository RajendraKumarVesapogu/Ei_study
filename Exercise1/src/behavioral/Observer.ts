export interface Observer {
    update(eventType: string, message: string): void;
}

export class User implements Observer {
    constructor(private name: string) {}

    update(eventType: string, message: string): void {
        console.log(`${this.name} received notification for ${eventType}: ${message}`);
    }
}

export class NotificationService {
    private observers: { [key: string]: Observer[] } = {};

    subscribe(eventType: string, observer: Observer): void {
        if (!this.observers[eventType]) {
            this.observers[eventType] = [];
        }
        this.observers[eventType].push(observer);
    }

    notify(eventType: string, message: string): void {
        if (this.observers[eventType]) {
            for (const observer of this.observers[eventType]) {
                observer.update(eventType, message);
            }
        }
    }
}

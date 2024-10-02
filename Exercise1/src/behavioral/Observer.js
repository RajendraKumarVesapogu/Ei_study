"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.update = function (eventType, message) {
        console.log("".concat(this.name, " received notification for ").concat(eventType, ": ").concat(message));
    };
    return User;
}());
exports.User = User;
var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.observers = {};
    }
    NotificationService.prototype.subscribe = function (eventType, observer) {
        if (!this.observers[eventType]) {
            this.observers[eventType] = [];
        }
        this.observers[eventType].push(observer);
    };
    NotificationService.prototype.notify = function (eventType, message) {
        if (this.observers[eventType]) {
            for (var _i = 0, _a = this.observers[eventType]; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.update(eventType, message);
            }
        }
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;

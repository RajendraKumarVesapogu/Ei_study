"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestUser = exports.AdminUser = exports.UserDecorator = exports.BasicUser = void 0;
class BasicUser {
    getPermissions() {
        return 'Basic user permissions';
    }
}
exports.BasicUser = BasicUser;
class UserDecorator {
    constructor(user) {
        this.user = user;
    }
    getPermissions() {
        return this.user.getPermissions();
    }
}
exports.UserDecorator = UserDecorator;
class AdminUser extends UserDecorator {
    getPermissions() {
        return `${this.user.getPermissions()}, Admin permissions`;
    }
}
exports.AdminUser = AdminUser;
class GuestUser extends UserDecorator {
    getPermissions() {
        return `${this.user.getPermissions()}, Guest permissions`;
    }
}
exports.GuestUser = GuestUser;
//# sourceMappingURL=UserDecorator.js.map
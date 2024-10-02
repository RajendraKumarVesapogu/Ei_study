"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestUser = exports.AdminUser = exports.UserDecorator = exports.BasicUser = void 0;
var BasicUser = /** @class */ (function () {
    function BasicUser() {
    }
    BasicUser.prototype.getPermissions = function () {
        return 'Basic user permissions';
    };
    return BasicUser;
}());
exports.BasicUser = BasicUser;
var UserDecorator = /** @class */ (function () {
    function UserDecorator(user) {
        this.user = user;
    }
    UserDecorator.prototype.getPermissions = function () {
        return this.user.getPermissions();
    };
    return UserDecorator;
}());
exports.UserDecorator = UserDecorator;
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminUser.prototype.getPermissions = function () {
        return "".concat(this.user.getPermissions(), ", Admin permissions");
    };
    return AdminUser;
}(UserDecorator));
exports.AdminUser = AdminUser;
var GuestUser = /** @class */ (function (_super) {
    __extends(GuestUser, _super);
    function GuestUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuestUser.prototype.getPermissions = function () {
        return "".concat(this.user.getPermissions(), ", Guest permissions");
    };
    return GuestUser;
}(UserDecorator));
exports.GuestUser = GuestUser;

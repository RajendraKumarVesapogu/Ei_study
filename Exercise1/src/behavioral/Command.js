"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandInvoker = exports.DeleteCommand = exports.UpdateCommand = exports.SaveCommand = void 0;
var SaveCommand = /** @class */ (function () {
    function SaveCommand() {
    }
    SaveCommand.prototype.execute = function () {
        console.log('Data has been saved');
    };
    return SaveCommand;
}());
exports.SaveCommand = SaveCommand;
var UpdateCommand = /** @class */ (function () {
    function UpdateCommand() {
    }
    UpdateCommand.prototype.execute = function () {
        console.log('Data has been updated');
    };
    return UpdateCommand;
}());
exports.UpdateCommand = UpdateCommand;
var DeleteCommand = /** @class */ (function () {
    function DeleteCommand() {
    }
    DeleteCommand.prototype.execute = function () {
        console.log('Data has been deleted');
    };
    return DeleteCommand;
}());
exports.DeleteCommand = DeleteCommand;
var CommandInvoker = /** @class */ (function () {
    function CommandInvoker(command) {
        this.command = command;
    }
    CommandInvoker.prototype.executeCommand = function () {
        try {
            this.command.execute();
        }
        catch (error) {
            console.error('Error executing command', error);
        }
    };
    return CommandInvoker;
}());
exports.CommandInvoker = CommandInvoker;

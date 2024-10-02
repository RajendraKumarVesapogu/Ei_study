"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandInvoker = exports.DeleteCommand = exports.UpdateCommand = exports.SaveCommand = void 0;
class SaveCommand {
    execute() {
        console.log('Data has been saved');
    }
}
exports.SaveCommand = SaveCommand;
class UpdateCommand {
    execute() {
        console.log('Data has been updated');
    }
}
exports.UpdateCommand = UpdateCommand;
class DeleteCommand {
    execute() {
        console.log('Data has been deleted');
    }
}
exports.DeleteCommand = DeleteCommand;
class CommandInvoker {
    constructor(command) {
        this.command = command;
    }
    executeCommand() {
        try {
            this.command.execute();
        }
        catch (error) {
            console.error('Error executing command', error);
        }
    }
}
exports.CommandInvoker = CommandInvoker;
//# sourceMappingURL=Command.js.map
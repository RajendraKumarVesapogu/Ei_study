export interface Command {
    execute(): void;
}
export declare class SaveCommand implements Command {
    execute(): void;
}
export declare class UpdateCommand implements Command {
    execute(): void;
}
export declare class DeleteCommand implements Command {
    execute(): void;
}
export declare class CommandInvoker {
    private command;
    constructor(command: Command);
    executeCommand(): void;
}

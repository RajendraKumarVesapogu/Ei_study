export interface Command {
    execute(): void;
}

export class SaveCommand implements Command {
    execute(): void {
        console.log('Data has been saved');
    }
}

export class UpdateCommand implements Command {
    execute(): void {
        console.log('Data has been updated');
    }
}

export class DeleteCommand implements Command {
    execute(): void {
        console.log('Data has been deleted');
    }
}

export class CommandInvoker {
    constructor(private command: Command) {}

    executeCommand(): void {
        try {
            this.command.execute();
        } catch (error) {
            console.error('Error executing command', error);
        }
    }
}

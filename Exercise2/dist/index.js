"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const path_1 = __importDefault(require("path"));
const Logger_1 = require("./utils/Logger");
const users = ['Alice', 'Bob', 'Charlie', 'Dave'];
function createWorker(username) {
    return new Promise((resolve, reject) => {
        const worker = new worker_threads_1.Worker(path_1.default.resolve(__dirname, './UserWorker.js'), {
            env: { USERNAME: username }
        });
        worker.on('message', (msg) => {
            Logger_1.Logger.log(msg);
            resolve();
        });
        worker.on('error', (err) => {
            Logger_1.Logger.error(`Error with user ${username}: ${err.message}`);
            reject(err);
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        Logger_1.Logger.log('Starting chat room simulation...');
        const workerPromises = users.map(username => createWorker(username));
        yield Promise.all(workerPromises);
        Logger_1.Logger.log('All users have finished.');
    });
}
main().catch(err => Logger_1.Logger.error(`Error: ${err.message}`));
//# sourceMappingURL=index.js.map
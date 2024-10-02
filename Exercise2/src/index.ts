import { Worker } from 'worker_threads';
import path from 'path';
import { Logger } from './utils/Logger';

const users = ['Alice', 'Bob', 'Charlie', 'Dave'];

function createWorker(username: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, './UserWorker.js'), {
      env: { USERNAME: username }
    });

    worker.on('message', (msg) => {
      Logger.log(msg);
      resolve();
    });

    worker.on('error', (err) => {
      Logger.error(`Error with user ${username}: ${err.message}`);
      reject(err);
    });
  });
}

async function main() {
  Logger.log('Starting chat room simulation...');

  const workerPromises = users.map(username => createWorker(username));
  await Promise.all(workerPromises);

  Logger.log('All users have finished.');
}

main().catch(err => Logger.error(`Error: ${err.message}`));

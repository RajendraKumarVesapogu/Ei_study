import { parentPort } from 'worker_threads';
import { User } from './models/User';
import { ChatRoomHandler } from './handlers/ChatRoomHandler';
import { Mutex } from './utils/Mutex';

const mutex = new Mutex();

const handler = new ChatRoomHandler();
const user = new User(process.env.USERNAME!);
const roomId = 'Room123';

(async function () {
  const unlock = await mutex.lock(); 
  try {
    handler.joinRoom(roomId, user);
    handler.sendMessage(roomId, user, `Hello from ${user.getName()}!`);
  } finally {
    unlock(); 
  }

  if (parentPort) parentPort.postMessage(`${user.getName()} completed.`);
})();

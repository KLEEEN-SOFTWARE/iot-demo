import { getSocketIOServer } from '../init';

export class RefreshApi {
  static refreshWorkflowsAllClients(message: string | string[]) {
    const io = getSocketIOServer();

    io.emit('event://auto-refresh', message);
  }

  static refreshWorkflowsAllClientsExcept(userId: string, message: string | string[]) {
    const io = getSocketIOServer();

    const userSet = io.sockets.adapter.rooms.get(userId);
    const [[userSocketId]] = userSet.entries();
    const userSocket = io.sockets.sockets.get(userSocketId);

    userSocket.broadcast.emit('event://auto-refresh', message);
  }
}

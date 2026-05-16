import { io } from 'socket.io-client';
import { serverUrl } from './App';

let socket = null;

export const initializeSocket = () => {
    if (!socket) {
        socket = io(serverUrl, { withCredentials: true });
    }
    return socket;
};

export const getSocket = () => {
    return socket;
};

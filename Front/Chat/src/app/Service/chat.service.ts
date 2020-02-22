
import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ChatService {

    private url = 'http://127.0.0.1:3000';
    private socket;    

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
    }
    public getMessages = () => {
        return Observable.create(observer => {
            this.socket.on('get', msg => {
                observer.next(msg);
            });
        });
    }
}

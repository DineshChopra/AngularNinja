import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';
import { Http } from '@angular/http';
@Injectable()
export class CricketService{

    // private url = 'http://localhost:3010'; 
    private socket;
    public updateScoreEvent : EventEmitter<any>;
    constructor(private http : Http){
        this.socket = io.connect('http://localhost:3010');
        this.updateScoreEvent = new EventEmitter();
        this.connect();
    }

    connect() {
        var socket = this.socket;
        var updateScoreEvent = this.updateScoreEvent;

        socket.on('connect', function (data) {
            socket.emit('join', 'Hello World from client');
        });

        socket.on('messages', function (data) {
            console.log(data);
        });

        socket.on('broad', function (data) {
            console.log(`Broadcasting data ${data}`);
        });

        socket.on('total-score-broadcast', function(data){
            console.log(`Score broadcast event ---------- `, data);
            updateScoreEvent.emit(data);
        })
    }
    
    updateScore(score){
        this.socket.emit('update-score', score);
        return this.http.post('http://localhost:3010/api/cricket', {score});
    }
}
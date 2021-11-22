import React from "react";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

const WebSocketFun = () => {

    return<div>
        <button onClick={connect}>Connect button</button>
        <button onClick={sendMessage}>Send button</button>
    </div>
}

var stompClient;

const connect = () => {
    // const Stomp = require("stompjs");
    // var SockJS = require("sockjs-client");
    let SockJScl = new SockJS("http://localhost:8080/ws");
    stompClient = Stomp.over(SockJScl);
    stompClient.connect({}, onConnected, ()=>{
        console.log("err")});
};

const onConnected = () => {
    console.log("connected");

    stompClient.subscribe(
        "/user/" + 1 + "/queue/messages",
        ()=>{
            console.log("Сообщение получено!")}
    );
};

const sendMessage = (msg) => {
    // if (msg.trim() !== "") {
        const message = {
            // senderId: 1,
            // recipientId: 1,
            // senderName: "sender1",
            // recipientName: "sender2",
            // content: msg,
            // timestamp: new Date(),
            message: "hello"
        };

        stompClient.send("/app/chat", {}, JSON.stringify(message));
    // }
};

export default WebSocketFun;
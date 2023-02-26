import React, { useState, useEffect } from 'react';
import {db} from "./firebase/Firebase"
import {uid} from "uid"
import {set, ref, onValue} from "firebase/database"

function Hello() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
    onValue(ref(db), snapshot => {
        const data = snapshot.val()
        if(data !== null){
            Object.values(data).map(message => {
                setMessages(oldArray => [...oldArray, message])
            })
        }
    })
    }, []);

  return (
    <div>
      {messages.map((message) => (
        <h1>{message.message}</h1>
      ))}
    </div>
  );
}

export default Hello;

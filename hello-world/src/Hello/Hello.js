/*
  @Author Benjamin Rittenhouse
  @Date 02/27/2023
  @Desc Hello.js is a simple Hello, World! application where a user can input text and read / write to the databse
*/

import React, { useState, useEffect } from 'react';
import { db } from "../firebase/Firebase"
import { ref, onValue, set, push, get, child} from "firebase/database"

function Hello() {

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // use effect updates every time we get new data from the database
  useEffect(() => {
    /*setMessages([]);
    const newMessages = []
    onValue(ref(db), snapshot => {
      const data = snapshot.val()
      console.dir(data.messages);
        Object.values(data.messages).map(message => {
          setMessages(oldArray => [...oldArray, message])
        })
    })*/

    const dbRef = ref(db);
    get(child(dbRef, 'messsages')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }, []);

  // function to add record from user input to the database
  function handleClick() {
    const messagesRef = ref(db, "messages")
    const newMsgRef = push(messagesRef);
    const newId = newMsgRef.key;
    set(newMsgRef, {
      message: userInput,
      timestamp: Date.now(),
    });
  }

  return (
    <div>
      <h1>Your message (from Firebase):</h1>
      {messages.map((val) => (
        <h2>{val.message}</h2>
      ))}

      <input
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button onClick={handleClick}>
        Add to the DB!
      </button>
    </div>
  );
}

export default Hello;

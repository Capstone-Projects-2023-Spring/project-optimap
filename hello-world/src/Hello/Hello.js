/*
  @Author Benjamin Rittenhouse
  @Date 02/27/2023
  @Desc Hello.js is a simple Hello, World! application where a user can input text and read / write to the databse
*/

import React, { useState, useEffect } from 'react';
import { db } from "../firebase/Firebase"
import { ref, onValue, set } from "firebase/database"

function Hello() {

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setMessages([]);
    onValue(ref(db), snapshot => {
      const data = snapshot.val()
      if (data !== null) {
        Object.values(data).map(message => {
          setMessages(oldArray => [...oldArray, message])
        })
      }
    })
  }, []);

  // function to write user input to the database
  function handleClick() {
    set(ref(db, 'messages/'), {
      message: userInput
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
        Write to the DB!
      </button>
    </div>
  );
}

export default Hello;

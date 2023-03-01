/*
  @Author Benjamin Rittenhouse
  @Date 02/27/2023
  @Desc Hello.js is a simple Hello, World! application where a user can input text and read / write to the databse
*/

import React, { useState, useEffect } from 'react';
import { db } from "../firebase/Firebase"
import { ref, onValue, set, push, remove} from "firebase/database"
import { FaFire, FaReact } from 'react-icons/fa';

import "./hello.css"

function Hello() {

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  // use effect updates every time we get new data from the database
  useEffect(() => {
    setMessages([]);
    const newMessages = []
    onValue(ref(db), snapshot => {
      const data = snapshot.val()
        Object.values(data.messages).map(message => {
            setMessages(oldArray => [...oldArray, message])
        })
    })


  }, []);

  // function to add record from user input to the database
  function handleClick() {
    const messagesRef = ref(db, "messages")
    const newMsgRef = push(messagesRef);
    const newId = newMsgRef.key;
    setMessages([])
    set(newMsgRef, {
      message: userInput,
      timestamp: Date.now(),
      message_id: newId
    });
  }

  // handle remove from firebase
  function handleDelete(id) {
      const tasksRef = ref(db, `messages/${id}`);

      setMessages([])
      remove(tasksRef).then(() => {
        console.log("location removed");
      });
  }

  function handleEdit(){

  }

  return (
    <div className = "hello">
      <h1 className="title"><FaReact style={{color: "#0099ff", width: "5%", height: "5%"}}/> + <FaFire style={{color: "#eda71c", width: "5%", height: "5%"}}/></h1>
      <p>1. type and enter to add a record</p>
      <p>2. click any record to delete it</p>
      {messages.map((val) => (
        <div className="messages">
          <h2 className="message" onClick={()=>handleDelete(val.message_id)}>{val.message}</h2>
        </div>
      ))}

      <input
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button className="add" onClick={handleClick}>
        Add to the DB!
      </button>
    </div>
  );
}

export default Hello;

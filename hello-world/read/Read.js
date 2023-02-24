// import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import {db} from "../firebase/firebase"
import { doc, getDoc } from "firebase/firestore";




export default function Read() {
    const [message, setMessage] = useState("")

    useEffect(() => {
        async function fetchData() {
          const docRef = doc(db, 'words', 'word');
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setMessage(docSnap.data());
            console.log("message: " + message)
          } else {
            setMessage('No such document!');
          }
        }
        fetchData();
      }, []);

    return (
        <Text>
            {message}
        </Text>

    );
}
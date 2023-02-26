import React, { useEffect } from 'react';
import firestore from 'firebase/firestore';


export default function Read() {
    useEffect(() => {
        const word = firestore()
          .collection('words')
          .doc("word")
          .onSnapshot(documentSnapshot => {
            console.log('Word data: ', documentSnapshot.data());
          });
    
        // Stop listening for updates when no longer required
        return () => word();
      }, ["word"]);
   

    return (
        <View>
            <Text>Message</Text>
        </View>

    );
}
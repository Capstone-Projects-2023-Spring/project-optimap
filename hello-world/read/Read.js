import { getDatabase, ref, onValue } from "firebase/app";
import db from "../firebase/firebase"

const [message, setMessage] = useState("")

export default function Read() {
    db.database().ref('words/').on('value', (snapshot) => {
        const words = snapshot.val();
        console.log(words);
        setMessage(words)
      });

    return(
        <View style = {[styles.screen]}>
            <Text>{message}</Text>
        </View>
        
    );
}
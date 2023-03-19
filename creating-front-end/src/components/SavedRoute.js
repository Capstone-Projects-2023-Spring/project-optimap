import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged} from "firebase/database";
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container';
import NavBar from './Navbar';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const SavedRoute = () => {
	const [routes, setRoutes] = useState([]); // routes are stored as an array of key:values
	const [userId, setUserId] = useState("");

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) { 
				setUserId(user.uid);  
				console.log("user id is: " + user.uid); 
				const routeRef = ref(db, 'users/' + userId + '/savedRoutes');
				onValue(routeRef, (snapshot) => { // listens for changes in routeRef and calls callback function
					const data = snapshot.val(); 
					if (data) {
						const routesArray = Object.entries(data).map(([key, value]) => [key, value]);
						setRoutes(routesArray);
					};
				});
			} else { 
				console.log("user not set"); 
			};
		});
	}, [userId]); // userId dependency will not cause a loop since onAuthStateChanged() will only be called upon login/logout

	return ( 
		<Container fluid>
			<NavBar/>
			<Accordion alwaysOpen>
				{routes.map(route => (
					<Accordion.Item key={route[0]} eventKey={route[0]}>
						<Accordion.Header>{route[0]}</Accordion.Header> 
						<Accordion.Body>
							{/* this is not formatted*/}
							{/* {route[1].address}    */}
							{/* {route[1]}  */}
							{JSON.stringify(route[1], null, 20)} 
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
    </Container>
	);
};
export default SavedRoute; 
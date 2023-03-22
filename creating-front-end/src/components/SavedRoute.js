import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged } from "firebase/database";
import { Container, Row, Accordion } from 'react-bootstrap';
import NavBar from './Navbar';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const SavedRoute = () => {
	const [favRoutes, setFavRoutes] = useState([]); // routes are stored as an array of key:values
	const [recentRoutes, setRecentRoutes] = useState([]);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserId(user.uid);
				console.log("user id is: " + user.uid);
				const recentRouteRef = ref(db, 'users/' + userId + '/recentRoutes');
				onValue(recentRouteRef, (snapshot) => { // listens for changes in routeRef and calls callback function
					const data = snapshot.val();
					if (data) {
						const routesArray = Object.entries(data).map(([key, value]) => [key, value]);
						setRecentRoutes(routesArray);
					};
				});

				const favoriteRouteRef = ref(db, 'users/' + userId + '/savedRoutes');
				onValue(favoriteRouteRef, (snapshot) => { // listens for changes in routeRef and calls callback function
					const data = snapshot.val();
					if (data) {
						const routesArray = Object.entries(data).map(([key, value]) => [key, value]);
						setFavRoutes(routesArray);
					};
				});
			} else {
				console.log("user not set");
			};
		});
	}, [userId]); // userId dependency will not cause a loop since onAuthStateChanged() will only be called upon login/logout

	return (
		<Container fluid>
			<NavBar />

			<Container style={{padding: '1rem'}} fluid>
			<Row>
				<h2>Favorite Routes</h2>
			</Row>

			<Row>
				<Accordion alwaysOpen>
					{favRoutes.map(route => (
						<Accordion.Item key={route[0]} eventKey={route[0]}>
							<Accordion.Header>{route[1].name}</Accordion.Header>
							<Accordion.Body>
								{route[1].route}
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</Row>

			<Row style={{marginTop: '1rem'}}>
				<h2>Recent Routes</h2>
			</Row>
			<Row>
				<Accordion alwaysOpen>
					{recentRoutes.map(route => (
						<Accordion.Item key={route[0]} eventKey={route[0]}>
							<Accordion.Header>{route[1].timestamp}</Accordion.Header>
							<Accordion.Body>
								{route[1].route.map(r => (
									<p>{r}</p>
								))}
							</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</Row>
			</Container>
		</Container>
	);
};
export default SavedRoute; 
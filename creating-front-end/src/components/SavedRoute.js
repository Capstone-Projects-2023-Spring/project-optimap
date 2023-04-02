import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged, remove } from "firebase/database";
import { Container, Row, Accordion, Button } from 'react-bootstrap';
import NavBar from './Navbar';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import {useNavigate} from 'react-router-dom';


const SavedRoute = () => {
	// navigate to a new page
	const navigate = useNavigate()

	const [savedRoutes, setSavedRoutes] = useState([]); // routes are stored as an array of key:values
	const [recentRoutes, setRecentRoutes] = useState([]);
	const [userId, setUserId] = useState("");

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserId(user.uid);
				console.log("user id is: " + user.uid);
				// RECENT ROUTES
				const recentRouteRef = ref(db, 'users/' + userId + '/recentRoutes');
				onValue(recentRouteRef, (snapshot) => { // listens for changes in routeRef and calls callback function
					const data = snapshot.val();
					if (data) {
						const routesArray = Object.entries(data).map(([key, value]) => [key, value]);
						setRecentRoutes(routesArray);
					};
				});

				// SAVED / FAVORITE ROUTES
				const savedRouteRef = ref(db, 'users/' + userId + '/savedRoutes');
				onValue(savedRouteRef, (snapshot) => { // listens for changes in routeRef and calls callback function
					const data = snapshot.val();
					if (data) {
						const routesArray = Object.entries(data).map(([key, value]) => [key, value]);
						setSavedRoutes(routesArray);
					};
				});
			} else {
				console.log("user not set");
			};
		});
	}, [userId]); // userId dependency will not cause a loop since onAuthStateChanged() will only be called upon login/logout

	// handle remove from firebase
	function handleRecentDelete(id) {
		console.log("deleting " + id)
		const delref = ref(db, `users/${userId}/recentRoutes/${id}`);

		setRecentRoutes([])

		remove(delref).then(() => {
			console.log("location removed");
		});
	}

	function handleSavedDelete(id) {
		console.log("deleting " + id)
		const delref = ref(db, `users/${userId}/savedRoutes/${id}`);

		setSavedRoutes([])

		remove(delref).then(() => {
			console.log("location removed");
		});
	}

	function handleSavedLoad(route){
		console.log("loading ")
		console.dir(route)

		navigate("/map", {state:{locations: route}})
	}

	return (
		<Container fluid>
			<NavBar />

			<Container style={{ padding: '1rem' }} fluid>
				<Row>
					<h2>Saved Routes</h2>
				</Row>

				{savedRoutes.length > 0 ? (
					<Row>
						<Accordion alwaysOpen>
							{savedRoutes.map(route => (
								<Accordion.Item key={route[0]} eventKey={route[0]}>
									<Accordion.Header style={{ display: 'flex', flexDirection: 'row' }}>
										{route[1].name}
										<Button style={{ position: 'absolute', right: '10%' }} variant="danger" size="sm" className="ml-auto" onClick={() => handleSavedDelete(route[1].name)}>
											Delete
										</Button>
										<Button style={{ position: 'absolute', right: '25%' }} variant="success" size="sm" className="ml-auto" onClick={() => handleSavedLoad(route[1].route)}>
											Load
										</Button>
									</Accordion.Header>
									<Accordion.Body>
									{route[1].route.map(r => (
											<p>{r.street_address}</p>
									))}

									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Row>
				) : (
					<Row>
						<h4 style={{ marginTop: "1rem", marginLeft: "3rem", backgroundColor: 'white', width: '33vw' }}>No saved routes</h4>
					</Row>
				)}


				<Row style={{ marginTop: '1rem' }}>
					<h2>Recent Routes</h2>
				</Row>

				{recentRoutes.length > 0 ? (
					<Row>
						<Accordion alwaysOpen>
							{recentRoutes.map(route => (
								<Accordion.Item key={route[0]} eventKey={route[0]}>
									<Accordion.Header style={{ display: 'flex', flexDirection: 'row' }}>

										{route[1].timestamp}

										<Button style={{ position: 'absolute', right: '10%' }} variant="danger" size="sm" className="ml-auto" onClick={() => handleRecentDelete(route[1].route_id)}>
											Delete
										</Button>

										<Button style={{ position: 'absolute', right: '25%' }} variant="success" size="sm" className="ml-auto" onClick={() => handleSavedLoad(route[1].route)}>
											Load
										</Button>

									</Accordion.Header>
									<Accordion.Body>
										{route[1].route.map(r => (
											<p>{r.street_address}</p>
										))}
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</Row>
				) : (
					<Row>
						<h4 style={{ marginTop: "1rem", marginLeft: "3rem", backgroundColor: 'white', width: '33vw' }}>No recent routes</h4>
					</Row>
				)}

			</Container>
		</Container>
	);
};
export default SavedRoute; 
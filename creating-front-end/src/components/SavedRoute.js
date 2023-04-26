import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged, get, set, push, remove, child } from "firebase/database";
import 'firebase/auth'
import { Container, Row, Accordion, Button, ListGroup , Modal } from 'react-bootstrap';
import NavBar from './Navbar';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import {useNavigate} from 'react-router-dom';
import FriendList from './FriendList'


const SavedRoute = () => {
	// navigate to a new page
	const navigate = useNavigate()

	const [savedRoutes, setSavedRoutes] = useState([]); // routes are stored as an array of key:values
	const [recentRoutes, setRecentRoutes] = useState([]);
	const [userId, setUserId] = useState("");

	const [friends, setFriends] = useState([])
	
	// etnioaebfopasbfuivsaiduf
	const [showFriendList, setShowFriendList] = useState(false);

	const handleShareClick = () => {
		setShowFriendList(true);
	};

	const handleCancelClick = () => {
		setShowFriendList(false);
	};
	// saeblugibrsluibgsdiubgldsuirg

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

				const friendsRef = ref(db, `users/` + userId + `/Friends`);
				onValue(friendsRef, (snapshot) => {
					const data = snapshot.val();
					const friendsArray = [];
					if (data) {
						for (const key in data) {
							friendsArray.push({
								id: key,
								email: data[key],
							});
						}
					}
					setFriends(friendsArray);
				});
			} else {
				console.log("user not set");
			};
		});
		console.log(friends);
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
	
	function handleShareRoute(friendId, routeId) {
		const sharedRoutesRef = ref(db, 'sharedRoutes');
		const sharedRouteRef = push(sharedRoutesRef);

		const friendUserID = friendId;
		const sharedRouteId = sharedRouteRef.key;
		
		const routeRef = ref(db, `users/${userId}/savedRoutes/${routeId}`);
		get(routeRef).then((snapshot) => {
			const routeData = snapshot.val();

			const sharedRouteData = {
				owner: userId,
				friend: friendUserID,
				route: routeData,
			};
		
			set(sharedRouteRef, sharedRouteData);
			
			const ownerSharedRouteRef = ref(db, `users/${userId}/sharedRoutes`);
			push(ownerSharedRouteRef, sharedRouteId);

			const friendSharedRouteRef = ref(db, `users/${friendId}/sharedRoutes`);
			push(friendSharedRouteRef, sharedRouteId);
		});
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
										<div style={{textAlign: 'right', width: "100%"}}>
											<Button variant="danger" size="sm" className="ml-auto" onClick={() => handleSavedDelete(route[1].name)}>
												Delete
											</Button>
											<Button  variant="success" size="sm" className="ml-auto" onClick={() => handleSavedLoad(route[1].route)}>
												Load
											</Button>
											<Button variant="primary" size="sm" className="ml-auto" onClick={handleShareClick}>
												Share
											</Button>
											
										</div>
									</Accordion.Header>
									<Accordion.Body>
									
									{route[1].route.map((item, index) => {
										/* conditional rendering based on whether arrival time and/or hours spent are available */
										if (item.arrival_time && item.hours_spent) {
											return (
												<ListGroup.Item key={index}>{item.street_address} {"("}{item.hours_spent}hr {item.minutes_spent}m, {item.arrival_time}{")"}</ListGroup.Item>
											);
										} else if (item.arrival_time) {
											return (
												<ListGroup.Item key={index}>{item.street_address} {"("}{item.arrival_time}{")"}</ListGroup.Item>
											);
										} else if (item.hours_spent) {
											return (
												<ListGroup.Item key={index}>{item.street_address} {"("}{item.hours_spent}hr {item.minutes_spent}m{")"}</ListGroup.Item>
											);
										} else {
											return (
												<ListGroup.Item key={index}>{item.street_address}</ListGroup.Item>
											);
										}
									})}

									</Accordion.Body>
								</Accordion.Item>
							))}
							{showFriendList && <FriendList FriendList={friends} onCancel={handleCancelClick} />}
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

										<div style={{textAlign: 'right', width: "100%"}}>
										<Button variant="danger" size="sm" className="ml-auto" onClick={() => handleRecentDelete(route[1].route_id)}>
											Delete
										</Button>

										<Button variant="success" size="sm" className="ml-auto" onClick={() => handleSavedLoad(route[1].route)}>
											Load
										</Button>

										<Button variant ="primary" size="sm" classname="ml-auto">
											Share
										</Button>
										</div>

									</Accordion.Header>
									<Accordion.Body>
									{route[1].route.map((item, index) => {
										/* conditional rendering based on whether arrival time and/or hours spent are available */
										if (item.arrival_time && item.hours_spent) {
											return (
												<ListGroup.Item key={index}>{item.street_address} {"("}{item.hours_spent}hr {item.minutes_spent}m, {item.arrival_time}{")"}</ListGroup.Item>
											);
										} else if (item.arrival_time) {
											return (
												<ListGroup.Item key={index}>{item.street_address} {"("}{item.arrival_time}{")"}</ListGroup.Item>
											);
										} else if (item.hours_spent) {
											return (
												<ListGroup.Item key={index}>{item.street_address} {"("}{item.hours_spent}hr {item.minutes_spent}m{")"}</ListGroup.Item>
											);
										} else {
											return (
												<ListGroup.Item key={index}>{item.street_address}</ListGroup.Item>
											);
										}
									})}
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

				<Row style={{ marginTop: '1rem' }}>
					<h2>Shared Routes</h2>
				</Row>

			</Container>
		</Container>
	);
};
export default SavedRoute; 
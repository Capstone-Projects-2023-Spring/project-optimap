import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase/Firebase';
import { ref, onValue, onChildChanged, get, set, push, remove, child, update, getDatabase } from "firebase/database";
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
	const [sharedRoutes, setSharedRoutes] = useState([]);
	const [userId, setUserId] = useState("");

	const [friends, setFriends] = useState([])
	const [selectedRouteId, setSelectedRouteId] = useState(null);
	const [showFriendList, setShowFriendList] = useState(false);

	const [userEmail, setUserEmail] = useState('');
	const [emails, setEmails] = useState({});

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

				const sharedRouteRef = ref(db, 'users/' + userId + '/sharedRoutes');
				onValue(sharedRouteRef, (snapshot) => { // listens for changes in routeRef and calls callback function
					const data = snapshot.val();
					if (data) {
						const routesArray = Object.entries(data).map(([key, value]) => [key, value]);
						setSharedRoutes(routesArray);
						routesArray.forEach((route) => {
							if (route && route[1].route && route[1].route.name) {
							  console.log(route[0]);
							}
						});
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

	function handleSharedDelete(id) {
		console.log("deleting " + id)
		const delref = ref(db, `users/${userId}/sharedRoutes/${id}`);

		setSharedRoutes([])

		remove(delref).then(() => {
			console.log("location removed");
		});
	}

	function handleSavedLoad(route){
		console.log("loading ")
		console.dir(route)

		navigate("/map", {state:{locations: route}})
	}

	function handleShareClick(id){
		console.log("got route id:" + id);
		setSelectedRouteId(id);
		setShowFriendList(true);
	}

	function handleCancelClick(){
		setShowFriendList(false);
	}

	async function getUserEmailById(userId) {
		const db = getDatabase();
		const userRef = ref(db, `users/${userId}`);
		try {
		  const snapshot = await get(userRef);
		  const userData = snapshot.val();
		  console.log("inside get user by email: " + userId);
		  console.log(userData.email);
		  return userData.email || '';
		} catch (error) {
		  throw new Error(`Could not get user email: ${error.message}`);
		}
	}
	


	function handleShareRoute(friendId, routeId) {
		const sharedRoutesRef = ref(db, 'sharedRoutes');
		const sharedRouteRef = push(sharedRoutesRef);
	  
		const friendUserID = friendId;
		const sharedRouteId = sharedRouteRef.key;
		
		const routeRef = ref(db, `users/${userId}/savedRoutes/${routeId}`);
		get(routeRef).then((snapshot) => {
			const routeData = snapshot.val();
			console.log(routeData);
			const sharedRouteData = {
				owner: userId,
				friend: friendUserID,
				route: routeData,
			};
		
			set(sharedRouteRef, sharedRouteData);

			const ownerSharedRoutesRef = ref(db, `users/${userId}/sharedRoutes`);
			const friendSharedRoutesRef = ref(db, `users/${friendId}/sharedRoutes`);
		
			const updates = {};
			updates[`/${sharedRouteId}`] = sharedRouteData;
		
			update(ownerSharedRoutesRef, updates);
			update(friendSharedRoutesRef, updates);
		});
	}

	useEffect(() => {
		async function fetchEmails() {
		  const newEmails = {};
		  for (const route of sharedRoutes) {
			const email = await getUserEmailById(route[1].owner);
			newEmails[route[0]] = email;
		  }
		  setEmails(newEmails);
		}
		fetchEmails();
	}, [sharedRoutes]);

	useEffect(() => {
		console.log("friends has been updated:", friends);
	}, [friends]);
	
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
											<Button variant="primary" size="sm" className="ml-auto" onClick={() => handleShareClick(route[1].name)}>
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
						{showFriendList && <FriendList friendList={friends} onClose={handleCancelClick} handleShareRoute={handleShareRoute} routeId={selectedRouteId}/>}
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

				{sharedRoutes.length > 0 ? (
					<Row>
						<Accordion alwaysOpen>
							{sharedRoutes.map(route => (
								<Accordion.Item key={route[0]} eventKey={route[0]}>
									<Accordion.Header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
										<div style={{ flexGrow: 1 }}>
											{route[1].route.name}
										</div>
										<div style={{ flexBasis: '50%', textAlign: 'center' }}>
											<span>Owner: {emails[route[0]]}</span>
										</div>
										<div style={{ flexShrink: 0 }}>
											<Button variant="danger" size="sm" className="ml-auto" onClick={() => handleSharedDelete(route[0])}>
											Delete
											</Button>
											<Button  variant="success" size="sm" className="ml-auto" onClick={() => handleSavedLoad(route[1].route.route)}>
											Load
											</Button>
										</div>
									</Accordion.Header>
									<Accordion.Body>
										{route[1].route.route.map((item, index) => {
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
						<h4 style={{ marginTop: "1rem", marginLeft: "3rem", backgroundColor: 'white', width: '33vw' }}>No shared routes</h4>
					</Row>
				)}
				
			</Container>
		</Container>
	);
};
export default SavedRoute; 
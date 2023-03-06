import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {

    const [loggedOut, setLoggedOut] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("user signed out")
            setLoggedOut(true)
        }).catch((error) => {
            console.log("error signing out:");
            console.log(error);
            setLoggedOut(false)
        });
    });


    return (
        <Container fluid>
            <Navbar />
            <Container className="d-flex justify-content-center align-items-center h-100">
                {loggedOut ?
                    (<div>User logged out.</div>)
                    :
                    (<div>Failure logging out!</div>)
                }
            </Container>
        </Container>
    );
};

export default Logout;
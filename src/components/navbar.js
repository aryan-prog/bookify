import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getAuth,signOut } from 'firebase/auth';
import {firebaseApp} from '../context/firebase.js';

const auth =getAuth(firebaseApp);


function MyNavbar() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/book/list">Add Listing</Nav.Link>
            <Nav.Link href="/book/orders">Orders</Nav.Link>
            <Nav.Link onClick={handleSignOut}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MyNavbar


import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/firebase';

function Login() {

    const firebase=useFirebase();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("Logging up a user...");
        const result= await firebase.signinUserWithEmailAndPassword(email,password);
        console.log("Successful",result);
    }


  return (
    <div className='container mt-5'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="email" 
        placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        type="password" 
        placeholder="Enter password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
    <h1 className='mt-5 mb-5'>OR</h1>
    <Button onClick={firebase.signinwithGoogle} variant='danger'>Sign In with Google</Button>
    </div>
  )
}

export default Login;

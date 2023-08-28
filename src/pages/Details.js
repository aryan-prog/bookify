import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { useFirebase } from '../context/firebase';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Details() {
    const params =useParams();
    const firebase=useFirebase();
    const [data,setData] =useState(null);
    const [url,setURL] =useState(null);
    const [qty,setQty] =useState(1);

    // console.log(params);
    useEffect(()=>{
        firebase.getBookbyID(params.bookId).then((value)=> setData(value.data()));
    },);

    useEffect(() => {
        if (data && data.imageURL) {
        const imageURL=data.imageURL;
        firebase.getImageURL(imageURL).then((url) => setURL(url));
        }},[firebase,data]);

    // console.log(data);

    if(data==null)
    return(<h1>Loading...</h1>);

    const placeOrder =async () =>{
        const result=await firebase.placeOrder(params.bookId,qty);
        console.log(result);
    }

  return (
    <div className='container mt-5'>
        <h1>{data.name}</h1>
      <img src={url} alt='Book' width='50%' style ={{borderRadius:'10px'}}></img>
      <h1>Details</h1>
      <p>Price: Rs. {data.price}</p>
      <p>ISBN Number. {data.isbn}</p>
      <h1>Owner Details</h1>
      <p>Name: {data.displayName}</p>
      <p>Email: {data.userEmail}</p>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
        onChange={(e)=>setQty(e.target.value)}
        value={qty}
        type="Number"
        placeholder='Enter Quantity'/>
      </Form.Group>
      <Button onClick={placeOrder}variant="success">Buy Now</Button>
    </div>
  )
}

export default Details

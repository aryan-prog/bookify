import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/firebase'
import BookCard from '../components/Card';

function Orders() {

    const firebase = useFirebase();
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        if(firebase.isLoggedIn)
        firebase.fetchMyBooks(firebase.user.uid)?.then((books)=>setBooks(books.docs));
    },[firebase]);

    if(!firebase.isLoggedIn)
    return <h1>Please Log In</h1>

  return (
    <div>
      {books.map((book)=>(
        <BookCard link ={`/book/orders/${book.id}`} key={book.id} id={book.id} {...book.data()}/>
      ))}
    </div>
  )
}

export default Orders

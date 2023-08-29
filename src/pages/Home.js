import React , {useEffect,useState} from 'react'
import { useFirebase } from '../context/firebase'
import BookCard from '../components/Card';

function Home() {
    const firebase = useFirebase();

    const [books,setBooks] = useState([]);

    useEffect(()=>{
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    },[firebase]);

  return (
    <div className='container mt-5'>
    {books.map((book) => (<BookCard link={`/book/view/${book.id}`}key={book.id} id={book.id} {...book.data()}/>))}
    </div>
  )
}

export default Home

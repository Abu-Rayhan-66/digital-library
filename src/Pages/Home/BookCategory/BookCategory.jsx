import { useEffect, useState } from "react";
import Category from "./Category";

const BookCategory = () => {
    const [books, setBooks] = useState([])

    

    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    console.log(books)
    return (
        
       <div>
        <h2 className="mt-10 text-center text-3xl font-bold text-blue-500">Book Categories</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 md:mx-20">
            
            {
                books.map(book => <Category key={book.id} book={book}></Category>)
            }
        </div>
       </div>
    );
};

export default BookCategory;
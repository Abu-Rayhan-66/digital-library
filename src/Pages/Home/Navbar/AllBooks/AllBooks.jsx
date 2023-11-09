import { useEffect, useState } from "react";
import AllBooksCard from "../AllBooksCard/AllBooksCard";


const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([])


    useEffect(()=>{
        fetch('https://assignment-eleven-server-ashen.vercel.app/books')
        .then(res => res.json())
        .then(data => {
            setAllBooks(data)
            

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])

    const handleFilter = e =>{
        e.preventDefault()

        const filterBooks = allBooks.filter(books =>books.quantity !== "0")
        setAllBooks(filterBooks)
        console.log(filterBooks)
        console.log("all books", allBooks)
        
    }
    
    

    return (
        <div>
            <button onClick={handleFilter} className="py-3 mt-6 mx-20 bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-400 w-40 text-lg font-semibold">Available Books</button>
            {
                allBooks.map(books => <AllBooksCard key={books._id} books={books}></AllBooksCard>)
            }
        </div>
    );
};

export default AllBooks;
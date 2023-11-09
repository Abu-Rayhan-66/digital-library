import { useEffect, useState } from "react";
import AllBooksCard from "../AllBooksCard/AllBooksCard";


const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5005/books')
        .then(res => res.json())
        .then(data => {
            setAllBooks(data)
            

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])

    return (
        <div>
            {
                allBooks.map(books => <AllBooksCard key={books._id} books={books}></AllBooksCard>)
            }
        </div>
    );
};

export default AllBooks;
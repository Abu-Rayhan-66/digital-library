import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import BorrowedBooksCard from "../BorrowedBooksCard/BorrowedBooksCard";



const BorrowedBooks = () => {
    
    const {user} = useContext(AuthContext)
    const currentUser = user.email

    const [data,setData] = useState([])
    const [userBooks,setUserBooks] = useState([])
    

    useEffect(()=>{
        fetch('https://assignment-eleven-server-ashen.vercel.app/borrowed')
        .then(res => res.json())
        .then(data => {
            setData(data)
           

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])

    useEffect(()=>{
        const filterDataNew = data.filter(item => item.email === currentUser)
        setUserBooks(filterDataNew)
    },[data, currentUser])
    
   console.log(userBooks)
    console.log(data)

    return (
        <div>
            {
              (userBooks.length ==0) ? <img className="mt-10 mb-10 w-full h-[40vh] md:h-[80vh]" src="https://i.ibb.co/3MW18n8/error1.png" alt="" /> : <div>
              {
                  userBooks.map(books => <BorrowedBooksCard key={books._id}
                       books={books} userBooks={userBooks} setUserBooks={setUserBooks} ></BorrowedBooksCard>)
              }
              </div>
           }
            
        </div>
    );
};

export default BorrowedBooks;
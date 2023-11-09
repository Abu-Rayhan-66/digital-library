/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const BorrowedBooksCard = ({ books, userBooks, setUserBooks }) => {

    const {_id, photo, name, type, date, borrowedTime } = books


    const handleReturn = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5005/borrowed/${id}`,{
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)

                if(data.deletedCount > 0){
                  Swal.fire(
                'Deleted!',
                'Your cart has been deleted.',
                'success'
              )
              const remainingProduct  = userBooks.filter(product => product._id !==id)
              setUserBooks(remainingProduct)
                }
                 

              })
            }
          })
          
    }


    return (
        <div>
            <div className=" mb-8 mx-4 md:mx-20 mt-10">
                <div className=" card card-side bg-blue-200 shadow-xl">
                    <figure><img className="h-[150px] w-[200px] md:h-[300px] md:w-[400px]" src={photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Book Name: {name}</h2>
                        <p>Category: {type}</p>
                        <p>Borrowed Date: {borrowedTime}</p>
                        <p>Return Date:{date}</p>
                        <button onClick={() => handleReturn(_id)}  className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-400 w-28 text-lg font-semibold">RETURN</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBooksCard;
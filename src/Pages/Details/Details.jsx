import { Link, useLoaderData, } from "react-router-dom";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import moment from 'moment';





const Details = () => {

     const {user} = useContext(AuthContext)
    

    const bookData = useLoaderData()
    const {_id,  photo, name, type, quantity, rating, author, } = bookData
    const borrowedMoment = <p>{moment().format('YYYY-MM-DD')}</p>
    const borrowedTime = borrowedMoment.props.children
    // eslint-disable-next-line no-unused-vars
    const newQuantity = quantity - 1


    

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const date = form.date.value
        const email = form.email.value
        const userName = form.userName.value


        const postData = {photo, name, type, date, borrowedTime, email, userName, }
        // const updateCount= {newQuantity}
        console.log(date,email, borrowedMoment)

        // fetch(`http://localhost:5005/books/${_id}`,{
        //     method:'PUT',
        //     headers:{
        //         'content-type':'application/json',
        //     },
        //     body:JSON.stringify(updateCount)
        // })
    
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)})




        fetch('http://localhost:5005/borrowed',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        
            if(data.insertedId){
               
                Swal.fire({
                    title: 'Success !',
                    text: 'Borrowed successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })


    }

    return (
        <div>
            <div>

<div className="mx-8 md:mx-40 h-[600px]  flex flex-col bg-blue-200 justify-center items-center text-xl mt-6 mb-6 rounded-md border-2 p-4">
    <img className="h-[300px] w-[350px] rounded-md border-2 p-4" src={photo} alt="" />
    <p className="mt-2 text-blue-500 font-medium">Book: {name}</p>
    <p className="font-medium text-blue-500">Category: {type}</p>
    <p className="font-medium text-blue-500">Writer: {author}</p>
    <p className="font-medium text-blue-500">Available: {quantity} copy</p>
    <p><Rating name="customized-10" defaultValue={rating} readOnly max={10} /></p>

    <div className="flex justify-between gap-4">
        
        {
            (quantity <= 0) ? <button className="rounded-md disabled  bg-blue-300 border-[#eae9dc] text-white px-4">BORROW</button> :<button className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg" 
            onClick={() => document.getElementById('my_modal_5').showModal()}>BORROW</button>
        }

        <dialog id="my_modal_5" className="modal z-[0] modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form onSubmit={handleSubmit}>
                    <p className="text-blue-500">Return Date</p>
                <input className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400" required type="date" placeholder="Borrow Date" name="date" id="" />
                <p className="text-blue-500">User Email</p>
                <input className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400" type="email" name="email" defaultValue={user.email} readOnly />
                <br />
                <p className="text-blue-500">User Name</p>
                <input className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400" type="text" name="userName" defaultValue={user.displayName} readOnly/>
                <br />
                <br />
                <div className="flex justify-between">
                <button className="rounded-md px-8 btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">Submit</button>
                <form method="dialog">

                <button className="rounded-md px-8 btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">Close</button>
                </form>
                </div>
                

                </form>

                
            </div>
        </dialog>
       <Link to={`/read/${_id}`}>
       <button className="rounded-md px-8 btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">READ</button>
       </Link>
    </div>
</div>


</div>

        </div>
    );
};

export default Details;
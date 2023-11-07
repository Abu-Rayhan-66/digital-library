import { useLoaderData, } from "react-router-dom";
import { Rating } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";





const Details = () => {

     const {user} = useContext(AuthContext)
    

    const bookData = useLoaderData()
    const { photo, name, type, quantity, rating, author, } = bookData

    

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const date = form.date.value
        const email = form.email.value
        const userName = form.userName.value


        const postData = { date, email, userName,type, name }
        console.log(date,email)

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

<div className="mx-8 md:mx-40 h-[600px]  flex flex-col justify-center items-center text-xl mt-6 mb-6 rounded-md border-2 p-4">
    <img className="h-[300px] w-[350px] rounded-md border-2 p-4" src={photo} alt="" />
    <p className="mt-2 ">Book: {name}</p>
    <p>Category: {type}</p>
    <p>Writer: {author}</p>
    <p>Available: {quantity} copy</p>
    <p><Rating name="customized-10" defaultValue={rating} readOnly max={10} /></p>

    <div className="flex justify-between gap-4">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg" 
        onClick={() => document.getElementById('my_modal_5').showModal()}>BORROW</button>
        <dialog id="my_modal_5" className="modal z-[0] modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form onSubmit={handleSubmit}>
                    <p className="text-blue-500">Return Date</p>
                <input className="pl-2 text-white rounded-md py-2 w-[300px] md:w-full bg-blue-400" type="date" placeholder="Borrow Date" name="date" id="" />
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
        <button className="rounded-md px-8 btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">READ</button>
    </div>
</div>


</div>

        </div>
    );
};

export default Details;
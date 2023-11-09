import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {

    const updateData = useLoaderData()
    const {_id, photo, name, author, type, rating} = updateData

    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const author = form.author.value;
        const type = form.type.value
        const rating = form.rating.value;

        const updateProduct = {photo, name, author, type, rating}
    
        fetch(`http://localhost:5005/books/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(updateProduct)
        })
    
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success !',
                    text: 'successfully Updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })       
    }

    return (
        <div>
            <div className="bg-blue-400 bg-opacity-50 w-[350px] md:w-[600px] mb-20 p-10 rounded-md flex  mx-auto justify-center mt-10">
            <form onSubmit={handleUpdate}>
                <p className="text-lg font-semibold text-white">Image</p>
                <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px] text-lg " type="text" defaultValue={photo} required  name="photo" placeholder="Image" id="" />
                <br />
                <p className="text-lg font-semibold text-white">Name</p>
                <input  className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]"  type="text" defaultValue={name} required  name="name" placeholder="Name" />
                <br />
                
                <p className="text-lg font-semibold text-white">Author Name</p>
                <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]" type="text" defaultValue={author} required  name="author" placeholder="Author Name"/>
                <br />
                <br />
                <label className="text-lg font-semibold text-white"  htmlFor="type">Category: </label>
                <select className="text-lg font-medium rounded-md" name="type" defaultValue={type} id="">

                    <option className="text-lg font-medium " value="novel">Novel</option>
                    <option className="text-lg font-medium" value="thriller">Thriller</option>
                    <option className="text-lg font-medium" value="history">History</option>
                    <option className="text-lg font-medium" value="drama">Drama</option>
                </select>
                <br />
                <br />
                
                   <p className="text-lg font-semibold text-white">Rating</p>
                   <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]" type="text" defaultValue={rating} required  name="rating" placeholder="Rating" id="" />
                   <br />
                   <button    className="btn w-[300px] mt-4 md:w-[400px]
                    bg-blue-500  text-white rounded-md hover:text-black hover:bg-blue-200 hover:border-4 hover:border-blue-500
                     text-lg font-semibold">SUBMIT</button>

            </form>
        </div>
        </div>
    );
};

export default UpdatePage;
// import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const AddBook = () => {
    // const params = useParams()
    // console.log(params)

    const handleAddBook = e =>{
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const type = form.type.value
        const description = form.description.value;
        const rating = form.rating.value;

        const allData = {photo, name, quantity, author, type, description, rating}
        console.log(photo, name, quantity, author, type, description, rating)

        fetch('https://assignment-eleven-server-ashen.vercel.app/books',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(allData)
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data)
        
            if(data.insertedId){
                Swal.fire({
                    title: 'Success !',
                    text: 'Book added successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })       
    }

    return (
        <div className="bg-blue-400 bg-opacity-50 w-[350px] md:w-[600px] mb-20 p-10 rounded-md flex  mx-auto justify-center mt-10">
            <form onSubmit={handleAddBook }>
                <p className="text-lg font-semibold text-white">Image</p>
                <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]  text-lg " type="text" required  name="photo" placeholder="Image" id="" />
                <br />
                <p className="text-lg font-semibold text-white">Name</p>
                <input  className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]"  type="text" required  name="name" placeholder="Name" />
                <br />
                <p className="text-lg font-semibold text-white">Quantity of the book</p>
                <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]" type="text" required  name="quantity" placeholder="Quantity of the book"/>
                <br />
                <p className="text-lg font-semibold text-white">Author Name</p>
                <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]" type="text" required  name="author" placeholder="Author Name"/>
                <br />
                <br />
                <label className="text-lg font-semibold text-white"  htmlFor="type">Category: </label>
                <select className="text-lg font-medium rounded-md" name="type" id="">

                    <option className="text-lg font-medium " value="novel">Novel</option>
                    <option className="text-lg font-medium" value="thriller">Thriller</option>
                    <option className="text-lg font-medium" value="history">History</option>
                    <option className="text-lg font-medium" value="drama">Drama</option>
                </select>
                <br />
                <br />
                <p className="text-lg font-semibold text-white">Short description</p>
                  <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]" type="text" required  name="description" placeholder="Short description" id="" />
                  <br />
                   <p className="text-lg font-semibold text-white">Rating</p>
                   <input className="pl-2 rounded-md py-2 w-[300px] md:w-[400px]" type="text" required  name="rating" placeholder="Rating" id="" />
                   <br />
                   <button    className="btn w-[300px] mt-4 md:w-[400px]
                    bg-blue-500  text-white rounded-md hover:text-black hover:bg-blue-200 hover:border-4 hover:border-blue-500
                     text-lg font-semibold">ADD BOOK</button>

            </form>
        </div>
    );
};

export default AddBook;
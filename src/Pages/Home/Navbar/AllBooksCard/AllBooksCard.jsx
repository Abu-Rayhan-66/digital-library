import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const AllBooksCard = ({books}) => {
    // eslint-disable-next-line react/prop-types
    const {_id, photo, name, type, author, rating} = books

    

    return (
        <div>
            
            <div className=" mb-8 mx-4 md:mx-20 mt-10">
                <div className=" card card-side bg-blue-200 shadow-xl">
                    <figure className=""><img className="h-full w-full  md:h-[300px] md:w-[400px]" src={photo} alt="Movie" /></figure>
                    <div className=" mx-4 md:mx-10 my-4 space-y-2 md:space-y-6">
                        <h2 className="card-title text-blue-500">Book Name: {name}</h2>
                        <p className="font-medium text-blue-500">Author: {author}</p>
                        <p className="font-medium text-blue-500">Category: {type}</p>
                        <p><Rating name="customized-10" defaultValue={rating} readOnly max={10} /></p>

                        <Link to={`/update/${_id}`}>
                        <button   className="btn bg-blue-500  text-white rounded-md hover:text-black hover:bg-blue-400 w-28 text-lg font-semibold">UPDATE</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksCard;
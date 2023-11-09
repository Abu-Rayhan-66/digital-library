/* eslint-disable react/prop-types */

import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CategoryBook = ({data}) => {
    console 
    const {_id, type, rating, photo,name, author, } = data
    return (
        <div>
            <div className="card lg:w-[500px] h-[500px] bg-blue-200 shadow-xl">
  <figure><img className="w-full h-full" src={photo} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-500">Book Name: {name}</h2>
    <p className="font-medium text-blue-500">Author: {author}</p>
    <p className="font-medium text-blue-500">Category: {type}</p>
   <p><Rating name="customized-10" defaultValue={rating} readOnly max={10} /></p>
    <div className="card-actions justify-end">
    <Link to={`/details/${_id}`}>
    <button className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:text-black font-semibold text-lg">Details</button>
    </Link>  
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryBook;
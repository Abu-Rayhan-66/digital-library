/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Category = ({book}) => {
  const {id, image, category}  = book || {}
    return (
        <div>
           <div>
                  
               <div className=" shadow-lg mb-10 mt-10 rounded-md">
                    <figure><img className="h-[300px] mx-auto" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-blue-600 font-semibold text-lg">Category: {category}</h2>
                        <Link to={`/booksCollection/${id}`}>
                        <button className="rounded-md btn bg-blue-500 border-[#eae9dc] text-white hover:text-black hover:bg-blue-300 font-semibold text-lg">ALL BOOKS</button>
                        </Link>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Category;
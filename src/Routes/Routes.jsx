import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/Home/Navbar/AddBook/AddBook";

import BorrowedBooks from "../Pages/Home/Navbar/borrowedBooks/borrowedBooks";
import AllBooks from "../Pages/Home/Navbar/AllBooks/AllBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Navbar/Register/Register";
import BooksCollection from "../Pages/BooksCollection/BooksCollection";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";




const Routes =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/addBooks",
                element:<AddBook></AddBook>
            },
            {
                path:"/allBooks",
                element: <AllBooks></AllBooks>
            },
            {
                path:"/borrowedBooks",
                element:<BorrowedBooks></BorrowedBooks>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/booksCollection/:_id",
                element:<BooksCollection></BooksCollection>,
                loader:() => fetch('/data.json')
            },
            {
                path:"/details/:id",
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5005/books/${params.id}`)
            }
           
            
            
        ]
    }
])


   

export default Routes;
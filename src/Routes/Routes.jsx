import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/Home/Navbar/AddBook/AddBook";
import AllBooks from "../Pages/Home/Navbar/AllBooks/AllBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Navbar/Register/Register";
import BooksCollection from "../Pages/BooksCollection/BooksCollection";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import BorrowedBooks from "../Pages/Home/Navbar/BorrowedBooks/BorrowedBooks";
import UpdatePage from "../Pages/Home/Navbar/AllBooksCard/UpdatePage";
import Read from "../Pages/Read/Read";




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
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:"/allBooks",
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:"/borrowedBooks",
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
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
                loader:({params}) => fetch(`https://assignment-eleven-server-ashen.vercel.app/books/${params.id}`)
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
                loader:({params}) => fetch(`https://assignment-eleven-server-ashen.vercel.app/books/${params.id}`)
            },
            {
                path:"/read/:id",
                element:<Read></Read>,
                loader:({params}) => fetch(`https://assignment-eleven-server-ashen.vercel.app/books/${params.id}`)
            }

           
            
           
        ]
    }
])


   

export default Routes;
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'


const Login = () => {

    const {  userLogIn, googleLogIn} = useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
  
    const handleLogIn = e =>{
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
      setError('')
      userLogIn(email, password)
      .then(result =>{
        console.log(result.user)
        navigate(location?.state? location.state:"/")
        // toast('successfully logged in ')
        
  
      })
      .catch(error =>{
  
        console.error(error)
         setError('Invalid email and password')
      })
  
      
    }

    const handleGoogleLogIn = e =>{
        e.preventDefault()
        googleLogIn()
        .then(result =>{
          console.log(result.user)
          navigate(location?.state? location.state:"/")
        })
        .catch(error =>{
          console.error(error)
        })
       
      }

    return (
        <div >
            <div id="background">
                <div className='border-2  w-[350px] md:w-[500px] p-5 md:p-10 bg-white bg-opacity-50  rounded-md' >
                    <h2 className='text-5xl font-bold text-blue-600'>Login here</h2>
                    <form onSubmit={handleLogIn } className=' w-40 h-80 relative'>
                        <h3 className='text-white text-lg font-medium'>Email</h3>
                        <input className='pl-2  rounded-md py-2 w-[300px] md:w-[400px]' type="email" required name="email"  placeholder='Email' id="" />
                        <br />
                        <h3 className='text-white text-lg  font-medium'>Password</h3>
                        <input className='pl-2 rounded-md py-2 w-[300px] md:w-[400px]  text-lg ' type="password" required name="password" placeholder='Password' id="" />
                        
                    <p className='text-white mb-6 w-[300px] '>Do not have an account? <Link className='font-semibold text-purple-800' to="/register">Register</Link></p>
                        {
                          error && <p className="text-red-800 font-semibold text-xl">{error}</p>
                        }
             <button    className="btn w-[300px] md:w-[400px] bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300  text-lg font-semibold">Login</button>
             <button onClick={handleGoogleLogIn} className="btn w-[300px] mt-4 md:w-[400px]
              bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-200
               text-lg font-semibold">Login With Google</button>
                        </form>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
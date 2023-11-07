import { useContext, useState } from "react";

import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,  toast } from "react-toastify";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";



const Register = () => {
  const [error, setError] = useState([])

  const {logOut, createUser} = useContext(AuthContext)

  const handleRegister = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const profile = e.target.profile.value
    const email = e.target.email.value
    const password = e.target.password.value
    setError('')
    console.log(name,profile,email,password)
    createUser(email,password)
    .then(result =>{
      logOut()
      console.log(result.user)
      updateProfile(result.user,{
        displayName:name,
        photoURL:profile,
      })
      .then(()=>{

      })
      .catch(error =>{
        console.error(error)
      })
    })
    .catch(error =>{
      console.error(error)
      
    })
     if(password.length < 6){
      return setError('Password should be 6 character or long')
     }
     else if(!/[A-Z]/.test(password)){
      return setError('Add a upper case')
     }
     else if(!/[!@#$%^&*()_+{}/[\]:;<>,.?~\\|]/.test(password)){
      return setError('Add a special character')
     }
    toast('successfully register')
  }
    return (
        <div>
             <div>
            <div className="mt-4 md:ml40 lg:ml-72 bg-white">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue-400 ">Register Now!</h1>
      
    </div>
    <div className="card static flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile</span>
          </label>
          <input type="url" placeholder="Profile URL" name="profile" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
           
                 <a>Already have an account? please <Link to="/login" className="text-purple-800 font-semibold">Login</Link></a>
           
          </label>
          <h3 className="text-red-500 text-lg font-medium">{error}</h3>
        </div>
        <div className="form-control mt-6">
          <button  className="btn bg-blue-500 rounded-md hover:bg-blue-200 hover:text-black text-white font-semibold">Register</button>
          <ToastContainer></ToastContainer>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;
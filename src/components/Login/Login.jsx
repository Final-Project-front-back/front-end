import React from "react";
import { useState } from "react";
import Logo from '../../assets/img/Logo.png'
import { IoPersonSharp } from "react-icons/io5";
import {IoLockClosedSharp} from "react-icons/io5"
import {FcGoogle} from "react-icons/fc"
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Login = () => {

  const [Urusername,setUserName] = useState('');
  const [Urpassword,setPassword] = useState();
  const navigate = useNavigate();

  const checkLogin = () =>{
    const data = {
      username : 'Admin',
      password : 123456
    }
    console.log(data)
      if(data.username === Urusername || data.password === Urpassword){
          navigate('/home')
          
      }else{
        console.log(data.username,Urusername)
          alert('Invalid name or password')
      }
  }
  return (
    <section className='h-screen bg-[url(".\assets\img\20-SON01830.jpg")] bg-cover bg-center'>
    <div className="flex flex-col items-center w-screen pt-32 ">
                <div className="">
                <img src={Logo} alt="logo" />
                </div>

                <div id='form-login' className="grid gap-5 w-full px-4 pt-6">
                    
                <form className='flex flex-col w-full'>
                    <div className='relative top-6 h-2 left-2 '>
                        <IoPersonSharp className='fill-white'/>
                    </div>
                    <input type="text" placeholder='Enter Your Username' 
                    className="text-center rounded-md p-3 bg-gray-600"
                    value={Urusername}
                    onChange={(e)=> setUserName(e.target.value)}/>
                </form>
                    
                    <form className='flex flex-col w-full'>
                        <div className='relative top-6 h-2 left-2'>
                            <IoLockClosedSharp className='fill-white'/>
                        </div>
                        <input type="password" placeholder='Enter Your Password' 
                        className="text-center rounded-md p-3 bg-gray-600 "
                        value={Urpassword}
                        onChange={(e)=> setPassword(e.target.value)}/>
            
                </form>
                    <span className="text-white text-xs text-end"><Link to ='/reset'>Forget your password</Link></span>
                </div>

                <div className="w-full px-4 pt-8 space-y-3">
                    <div className="bg-white w-full 
                    rounded-lg p-0.5 bg-gradient-to-r from-pink-500  via-black to-purple-600 ">
                        <button className="bg-black w-full p-3 rounded-lg text-white" onClick={(checkLogin)}
                        type="button">Login</button>
                    </div>

                    <div className="bg-white w-full 
                    rounded-lg p-0.5 bg-gradient-to-r from-pink-500  via-black to-purple-600">
                        <button className="bg-black w-full p-3 rounded-lg text-white">Continues with google</button>
                    </div>
                    <div><FcGoogle className=' relative bottom-11 left-8 bg-transparent'/></div>

                    <div className="text-center">
                    <span className="text-white ">Don't have any account? <Link to ="/register" 
                    className="text-pink-400 font-bold">Sign up</Link> </span>
                    </div>
                </div>
            </div>
       
    </section>
  )
}


export default Login;
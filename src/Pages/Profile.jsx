import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";

const Profile = () => {
    const data = Cookies.get("token");
    console.log("Cookie data:", data);
    const {name,email}=JSON.parse(data);
    
   

    return (
        <div className="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white shadow-lg transform duration-200 ease-in-out">
                <div className="h-32 overflow-hidden">
                    <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div className="flex justify-center px-5 -mt-12">
                    <img className="h-32 w-32 bg-white p-2 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div>
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">{name || "Guest"}</h2>
                        <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="_blank" rel="noopener noreferrer">{email}</a>
    
               </div>
               
                    <hr className="mt-6" />
                    <div className="flex bg-gray-50">
                        <div className="text-center w-full p-4 hover:bg-gray-100 cursor-pointer">
                        <button type='button' className='ml-9 bg-cyan-400 p-4'>Edit Password</button> 
                        </div>
                     
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

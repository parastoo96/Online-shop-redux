import React ,{useState , useEffect, } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

import { validate } from "../helper/validate";  
import {notify} from "../helper/toast";
import styles from"./SignUP.module.css";
 

const SignUp = ()=>{

    const[data , setData]= useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    });
    
    const[errors , setErrors]=useState({});
    const[touched , setTouched]=useState({});

    useEffect( () => {
         setErrors(validate(data ,"signup"))
    },[data , touched])

    const changeHandler = event =>{
        if (event.target.name==="isAccepted"){
            setData({...data , [event.target.name]:event.target.checked})
        }
        else {
            setData({...data , [event.target.name]:event.target.value})
        }
        console.log(data)
    }

    const focusHandler =event=>{
        setTouched({...touched ,[event.target.name]:true})
    }

    const SubmitHandeler = event =>{
        event.preventDefault();
    
        if(!Object.keys(errors).length){
            notify("you signed up successfully" , "success")
        }
        else{
            notify("1invalid data" , "error")
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }
    }


    


    return(
        <div className="flex justify-center bg-white min-h-screen items-center mb-10 xl:mt-10 2xl:mt-16 ">
           <form onSubmit={SubmitHandeler} className="border-[1px] border-solid border-silver w-fit p-12 m-12 rounded-[10px] h-fit bg-white sm:p-5 sm:my-12 sm:mx-5 sm:w-[70%] ">
            <h2 className="text-left mb-10 text-3xl text-blue">SignUp</h2>
            <div className="flex flex-col mb-2.5 h-[75px]">
                <label className="text-left mb-1 text-[#555555] text-base">Name</label>
                <input 
                className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput }
                 type="text" 
                 name="name" 
                 value={data.name} 
                 onChange={changeHandler} 
                 onFocus={focusHandler}
                 />
                {errors.name && touched.name && <span className="h-2.5 text-left mt-1 w-fit text-xs text-[#ff0000] leading-[3px] p-1 rounded bg-[#ff00002d]">{errors.name}</span>}
            </div>
            <div className="flex flex-col mb-2.5 h-[75px]">
                <label  className="text-left mb-1 text-[#555555] text-base">Email</label>
               <input 
               className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput }
               type="email" 
               name="email" 
               value={data.email} 
               onChange={changeHandler} 
               onFocus={focusHandler}
               />
               {errors.email && touched.email &&<span className="h-2.5 text-left mt-1 w-fit text-xs text-[#ff0000] leading-[3px] p-1 rounded bg-[#ff00002d]">{errors.email}</span>}
            </div>
            <div className="flex flex-col mb-2.5 h-[75px]">
                <label className="text-left mb-1 text-[#555555] text-base">Password</label>
                <input 
                className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput }
                type="password" 
                name="password" 
                value={data.password} 
                onChange={changeHandler} 
                onFocus={focusHandler}
                />
                {errors.password && touched.password && <span className="h-2.5 text-left mt-1 w-fit text-xs leading-[3px] text-[#ff0000] p-1 rounded bg-[#ff00002d]">{errors.password}</span>}
            </div>
            <div className="flex flex-col mb-2.5 h-[75px]">
                <label className="text-left mb-1 text-[#555555] text-base">confirmPassword</label>
                <input 
                className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput }
                type="confirmPassword" 
                name="confirmPassword" 
                value={data.confirmPassword} 
                onChange={changeHandler} 
                onFocus={focusHandler}/>
                {errors.confirmPassword &&touched.confirmPassword && <span className="h-2.5 text-left mt-1 w-fit text-xs text-[#ff0000] leading-[3px]  p-1 rounded bg-[#ff00002d]">{errors.confirmPassword}</span>}
            </div>
            <div className="flex flex-col mb-2.5 h-[75px]">
              
                <div className="flex text-sm flex-row item-center h-5 text-center ">
                <label  className="text-left mb-1 text-blue text-base">I accept terms of privacy policy</label>
                <input 
                className="ml-5 w-[18px] h-[18px] border-[1px] border-solid border-blue appearance-none rounded transition-all checked:w-[18p] checked:h-[18p] checked:bg-blue checked:rounded-full focus:w-[18p] focus:h-[18p] focus:outline-none focus:border-2 focus:border-solid  focus:border-[#004aaa] "
                type="checkbox" 
                name="isAccepted" 
                value={data.isAccepted} 
                onChange={changeHandler} 
                onFocus={focusHandler}
                />
                </div>
                {errors.isAccepted && touched.isAccepted && <span >{errors.isAccepted}</span>}
            </div>
            <div className="flex justify-between items-center">
                <Link className="text-blue no-underline font-bold transition-all hover:text-[#004aaa] " to="/login">Login</Link>
                <button type="submit" className="bg-blue py-2.5 px-5 text-white rounded-[5px] border-none text-sm font-medium  transition-all cursor-pointer hover:bg-[#004aaa] ">SignUp</button>
            </div>
           </form>
           <ToastContainer />
        </div>
    );
};
export default SignUp;
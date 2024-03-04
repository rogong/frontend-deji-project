import React, { useContext, useState } from 'react';
import { Form as FinalForm, Field, Form } from "react-final-form";
import { Link, useNavigate } from 'react-router-dom';
import { combineValidators, isRequired } from "revalidate";
import { RootStoreContext } from '../stores/rootStore';



const validate = combineValidators({
  email: isRequired("email"),
  password: isRequired("password")
});

const Signin = () => {
  const rootStore = useContext(RootStoreContext);
  const { login, user } = rootStore.userStore;
  

 

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Submited");
  }
    return (

        <div className="bg-[#c9d3d3a6] flex items-center justify-center">
      
          <div className="flex flex-col justify-center px-6 py-12 lg:px-8 lg:mt-5">
          
      
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
              <div className="bg-white p-8">
              <Form
    onSubmit={login}
    validate={validate}
    render={({ 
      handleSubmit,
     
     }) => (
            <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
                  <h2
                    className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-600">
                    Login 
                  </h2>
      
                  
                     
              <Field name="email">
          {({ input, meta }) => (
            <>
             <div className="mt-2 border-2 ">
              
              <input type="email" {...input} placeholder="Email"  className="text-input p-2 focus:outline-none"/>
              
            </div>
            <div>{meta.touched && meta.error && <span>{meta.error}</span>}</div>
            </>
          )}
        </Field>
        <Field name="password">
          {({ input, meta }) => (
            <>
            <div className="mt-2 border-2 ">
         
    
              <input type="password" {...input} placeholder="Password"  className="text-input p-2 focus:outline-none"/>
             
            </div>
            <div>{meta.touched && meta.error && <span>{meta.error}</span>}</div>
            </>
          )}
        </Field>
                  
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-[#4A00FF] hover:text-orange-700 text-right"
                        >Forgot password?</a>
                    </div>
               
      
                  <div className="mt-8">
                    <button type="submit"
                     
                     className=" text-white min-w-[300px] font-bold bg-[#4A00FF] btn-primary px-4 py-2">
                      Sign in
                    </button> 
                   
                  </div>
      
                 
      
                  <div>
                    
                    <div className="font-semibold">Don't have an account ?<Link to='/auth/Signup' className="underline text-[#4A00FF]">  Sign Up</Link></div>
                  </div>
                </form>
                 )}
                 />
              </div>
            </div>
          </div>
      
        </div>
      
        )
 
}

export default Signin
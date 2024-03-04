import React, { useContext, useState } from 'react';
import { Form as FinalForm, Field, Form } from "react-final-form";
import { Link } from 'react-router-dom';
import { combineValidators, isRequired } from "revalidate";
import { RootStoreContext } from '../stores/rootStore';


const validate = combineValidators({
  email: isRequired("email"),
  password: isRequired("password")
});

const Signup = () => {
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;

 
  return (

    <div className="bg-[#c9d3d3a6] flex items-center justify-center   ">

<div className="flex flex-col justify-center px-6 py-4 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

      <div >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-white p-8">
          <Form
    onSubmit={register}
    validate={validate}
    render={({ handleSubmit }) => (
            <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
              <h2
                className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-600">
                Sign up
              </h2>
              <h2
                className="mt-2 font-bold text-center text-2xl leading-9 tracking-tight text-gray-600">
              Create an account!
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

        
        <Field name="username">
          {({ input, meta }) => (
            <>
            <div className="mt-2 border-2 ">
             
              <input type="text" {...input} placeholder="Username"  className="text-input p-2 focus:outline-none"/>
             
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
        
              <div className="">
                <button type="submit" className=" text-gray-50 min-w-[300px] font-bold bg-[#4A00FF] btn-primary px-4 py-2">
                  Register
                </button>
        
              </div>
        
              <div>
        
                <div className="font-semibold">Already have an account ?<Link to='/auth/Signin' className="underline text-[#4A00FF]">  Sign In</Link></div>
              </div>
            </form>
    )}
    />
          </div>
        </div>
      </div>
    </div>

</div>

  )
}

export default Signup;
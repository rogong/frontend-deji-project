//import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Home from './pages/Home'
import Findjob from './pages/FindJob'
import Company from './pages/Company'
import Employ from './pages/Employ'
import Signin from './pages/Signin'
import MyJob from './pages/MyJob'
import Reviews from './pages/Reviews'
import Settings from './pages/Settings'
import Helpcenter from './pages/Helpcenter'
import Signup from './pages/Signup'








const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/>,
 },
  {
     path: '/profile', 
     element: <Profile/>,
  },
  {
    path: '/login', 
    element: <Login/>,
 },

 {
   path: '/findjob', 
   element: <Findjob />,
},

{
   path: '/company', 
   element: <Company/>,
},

{
   path: '/Employ', 
   element: <Employ />
},

{
   path: '/auth/Signin', 
   element: <Signin />
},

{
   path: '/MyJob', 
   element: <MyJob />
},

{
   path: '/Reviews', 
   element: <Reviews />
},

{
   path: '/Settings', 
   element: <Settings />
},

{
   path: '/Helpcenter', 
   element: <Helpcenter />
},

{
   path: '/auth/Signup', 
   element: <Signup />
},

{
   path: '/auth/Signin', 
   element: <Signin />
},






]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)

import React from 'react';
import  { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt} from "react-icons/fa";

const Settingpage = () => {

    const menuItem=[
        {
            path:'/',
            name:"Dashboard",
            icon: <FaTh/>
        },

        {
            path:'/about',
            name:"About",
            icon:<FaUserAlt/> 
        },

        {
            path:'/categories',
            name:"Categories",
            icon:<FaRegChartBar/>
        },

        {
            path:'/comment',
            name:"Comment",
            icon:<FaCommentAlt/> 
        },
    ]    

  return (
    <div>
        <div></div>
    </div>
  )
}

export default Settingpage;
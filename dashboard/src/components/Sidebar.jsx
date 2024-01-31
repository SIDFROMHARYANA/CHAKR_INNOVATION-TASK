import React, { useState } from 'react'
import Logo from '../imgs/orange.webp'
import user from '../imgs/GustavoXaviour.jfif'

import '@fortawesome/fontawesome-free/css/all.css';

import './Sidebar.css'

import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { UilSearchAlt } from '@iconscout/react-unicons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
//  import {UilImagesAlt } from '@iconscout/react-unicons';





const Sidebar = () => {

  const [selected, setSelected] = useState(0)
  return (
    <div className="Sidebar">
        {/* logo */}
    <div className="logo">
        <img src={Logo} alt="" />
        
        <span>
         OrangeFarm
         </span>       
        </div>  

        { /* menu */}
        <div className="menu">
           {
            <div className="menuItem1">
            <UilSearchAlt/>
            Search
          </div> 
}
          { 
            SidebarData.map((item, index)=>{
              return(
                <div className="menuItems ">
                  
                   <item.icon/>
                   <span>
                    {item.heading}
                   </span>
                 </div> 
              )
            })
           }

           <div className="menuItem2">
           <i class="fa-sharp fa-solid fa-gear"></i>           
           <span>
              Settings
            </span>
                 </div> 
 
        <div className="logo">
        <img src={user} alt="" />
        
        <span>
         Gustavo Xavier
         </span>       
        </div>  

<div className="menuItem3">
         <UilSignOutAlt/>
            <span>
              Logout
            </span>
                 </div> 
    </div>
    </div>
  );
};

export default Sidebar
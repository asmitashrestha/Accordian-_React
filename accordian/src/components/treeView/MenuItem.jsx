import React, { useState } from 'react'
import Menulist from './Menulist'
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({item}) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel)=>{
 setDisplayCurrentChildren({
     ...displayCurrentChildren,
     [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
 })
  }
  console.log(displayCurrentChildren);

  return (
    <li>
      <div className='flex bg-blue-600 w-36 rounded mb-2 ml-2'>
        <p className='text-lg font-bold font-sans text-white p-3 '>{item.label}</p>
        {
          item && item.children && item.children.length ? 
          <span className='plus-minus ml-3 mt-1 p-3' onClick={()=> handleToggleChildren(item.label)}>
            {
              displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus/>
            }
          </span> 
          :null
        }
      </div>
      
      {
        item && item.children && item.children.length > 0  && displayCurrentChildren[item.label]?
        <Menulist list={item.children}/>
        : null
      }
    </li>
  )
}

export default MenuItem

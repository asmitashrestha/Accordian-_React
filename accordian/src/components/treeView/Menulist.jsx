import React from 'react'
import MenuItem from './MenuItem'

const Menulist = ({list = []}) => {
  return (
    <ul className='menulist'>
      {
        list && list.length ? 
        list.map((listItem,index) => <MenuItem key={index} item={listItem}/>) 
        :null
      }
    </ul>
  )
}

export default Menulist

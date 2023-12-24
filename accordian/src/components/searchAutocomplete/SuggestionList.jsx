import React from 'react'

const SuggestionList = ({data,handleClick}) => {
  return (
    <ul className='list-none'>
      {
        data &&  data.length > 0 
        ?  data.map((itemname,index) =>
        <li className='relative top-36 right-36' onClick={handleClick} key={index}>{itemname}</li>)
        :null
      }
    </ul>
  )
}

export default SuggestionList

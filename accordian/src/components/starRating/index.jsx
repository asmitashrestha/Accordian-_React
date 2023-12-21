import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function StarRating({noOfStars}){
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleMouseMove =(getCurrentIndex) =>{
    setHover(getCurrentIndex)
  }
 
  const handleClick = (getCurrentIndex)=>{
    setRating(getCurrentIndex)
  }
  
  const handleMouseLeave =() =>{
    setHover(rating)
  }

  return <>
  <div className="star-rating flex justify-center text-center mt-12">
    {
      [...Array(noOfStars)].map((a,index)=>{
        index += 1
        return <FaStar
        className={index <= (hover || rating)? 'active': 'inactive'}
        key={index}
        onClick={()=> handleClick(index)}
        onMouseMove={()=> handleMouseMove(index)}
        onMouseLeave={()=> handleMouseLeave()}
        size={45}
        />
      })
    }
  </div>
  </>
}
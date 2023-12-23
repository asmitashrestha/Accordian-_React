 import React, { useState } from 'react'
 import { FaArrowAltCircleLeft } from "react-icons/fa";
 import { FaArrowAltCircleRight } from "react-icons/fa";
 import { GoDotFill } from "react-icons/go";
 
 const ImageSlider= ({slides}) => {
 const [currentIndex, setCurrentIndex] = useState(0)
 const slideStyle = {
  backgroundImage : `url(${slides[currentIndex].url})`,
  height:"100%",
  width:"100%",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  borderRadius:"11px",
 }

 const handlePrevious = () =>{
  const isFirstIndex = currentIndex ===0
  const newIndex = isFirstIndex ? slides.length - 1 : currentIndex-1
  setCurrentIndex(newIndex)
  
  
 }

 const handleNext = () =>{
 const isLastIndex = currentIndex=== slides.length - 1
 const newIndex = isLastIndex ? slides.length -1 - currentIndex : currentIndex + 1
  setCurrentIndex(newIndex)
}

const goToSlide = (currentIndex)=>{
  console.log(currentIndex);
  setCurrentIndex(currentIndex)
}
   return (
   <>
   <div className="left-arrow" onClick={handlePrevious}>
   <FaArrowAltCircleLeft />
   </div>
    <div style={slideStyle}>
       
     </div>
     <div className="right-arrow" onClick={handleNext}>
     <FaArrowAltCircleRight />
     </div>
     <div className="circle">
       {slides.map((slide, index) => (
        <div className="round text-red-500" key={index} onClick={() => goToSlide(index)}>
         <GoDotFill/>
        </div>
      ))}
    </div>
   </>
   )
 }
 
 export default ImageSlider
 
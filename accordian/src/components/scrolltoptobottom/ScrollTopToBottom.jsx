import React, { useEffect, useRef, useState } from 'react'

const ScrollTopToBottom = () => {
 const [data, setData] = useState('')
 const [loading, setLoading] = useState(false)
 const [error, setError] = useState(null)
 const bottomRef = useRef(null)

 const fetchData =async () =>{
  setLoading(true)
  try {
    const response =await fetch('https://dummyjson.com/products?limit=100')
    const data =await response.json()
    setData(data)
    setLoading(false)
    console.log(data);
    
  } catch (error) {
    console.log(error);
    setError(error.message)
    setLoading(false)
  }
 }
   useEffect(()=>{
    fetchData()
   },[])
   

   const handleTop = ()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
   }

   const handleBottom = ()=>{
    bottomRef.current.scrollIntoView({behavior:"smooth"})
   }

   if(error){
    return <h1>Error occured!</h1>
   }
   if(loading){
    return <h1>Data is loading</h1>
   }

  return (
    <div className="scroll-container justify-center text-center mt-9">
      <div className="scroll-btn">
        <button onClick={handleBottom}>Scroll-Button</button>
      </div>
      {
        data && data.products && data.products.length ? 
        data.products.map((item,index)=>
        <div key={index}>{item.title}</div>)
        :null
      }
      
      <div className="scroll-btn">
        <button onClick={handleTop}>Scroll-Top</button>
      </div>
      <div ref={bottomRef}></div>
      
    </div>
  )
}

export default ScrollTopToBottom

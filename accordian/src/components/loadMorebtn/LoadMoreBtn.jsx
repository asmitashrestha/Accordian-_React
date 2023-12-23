import React, { useEffect, useState } from 'react'

const LoadMoreBtn = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disable,setDisable] = useState(false)
  const fetchProducts =async ()=>{
    try {
      setLoading(true)
        const  response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 
        ? 0 : count * 20}`)
        const result = await response.json()
        
        if(result && result.products && result.products.length){
          setProducts( (previousData)=> [...previousData, ...result.products ])
          setLoading(false)
        }
        console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  
  }

  useEffect(()=>{
   fetchProducts()
  },[count])

  useEffect(()=>{
    products && products.length === 100 ? setDisable(true) : null
  },[products])

  if(loading){
    return <div>Loading products .....</div>
  }
  return (
    <div className='product-container'>
      <h1>Available Products</h1>
    <div className='products-container'>
      {
        products && products.length ?
        products.map((item,index)=>
        <div key={index} className='store-product'>
         <img src={item.thumbnail} alt={item.title} />
         <p>{item.title}</p>
        </div>
        ):null
      }
    </div>
    <div className="btn-load">
      <button disabled={disable} className='load-btn' onClick={()=> setCount(count+1)}>Load More Products</button>
      {
        disable ? <p>You have reached to 100 products</p> : null
      }
    </div>
    
    </div>
  )
}

export default LoadMoreBtn

import React, { useEffect, useState } from 'react'

const UseFetchHook = (url, options= {}) => {
  const [data,setData] = useState(null)
  const[pending, setPending] = useState(false)
  const [error, setError] = useState(null)


  const fetchData =async () =>{ 
    setPending(true)
    try {
      // const response =await fetch('https://dummyjson.com/products')
     const response = await fetch(url, {...options})
     if(!response.ok) throw new Error(response.statusText)

      const data = await response.json()
      setData(data)
      setError(null)
      // console.log(data);
      setPending(false)
    } catch (error) {
      console.log(error);
      setError(error.message);
      setPending(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[url])

  return {data,error,pending}
}

export default UseFetchHook

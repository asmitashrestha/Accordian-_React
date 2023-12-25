import { createContext, useEffect, useState } from "react";
import featureFalgDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false)
  const [enableFlag, setEnableFlag] = useState({})

  const fetchFeatureFlag =async () =>{
     try {
      setLoading(true)
      const response = await featureFalgDataServiceCall();
      setEnableFlag(response)
      console.log(response);
      setLoading(false)
     } catch (error) {
      console.log(error);
       setLoading(false)
      throw new Error(error)
      
     }
  }

  useEffect(()=>{
    fetchFeatureFlag()
  },[])

  return (
  <FeatureFlagContext.Provider value={{loading,enableFlag}}>
    {children}
  </FeatureFlagContext.Provider>
  )
}

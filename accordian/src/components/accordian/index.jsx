import { useState } from "react"
import data from "./data"


export default function Accordian(){

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleId, setMultipleId] = useState([])

  const handleSingleSelection = (currentId)=>{
   setSelected(currentId === selected ? null : currentId)
  }
 
  const handleMultiSelection = (currentId) =>{    
    let copyMultipleId = [...multipleId];
    const findIndexofCurrentId = copyMultipleId.indexOf(currentId)
    if(findIndexofCurrentId === -1) copyMultipleId.push(currentId)
    else copyMultipleId.splice(findIndexofCurrentId,1)
    setMultipleId(copyMultipleId)
  }

  return <>
  <div className="wrapper mt-20">
    <button className="btn " onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
    <div className="accordian">
      {
      data && data.length > 0 ? data.map((dataItem) =>
       <div  key={dataItem.id} className="item bg-blue-600 rounded relative left-96  font-bold w-96">
        <div onClick={enableMultiSelection
        ? ()=> handleMultiSelection(dataItem.id)
        :
           ()=>  handleSingleSelection(dataItem.id)}
            className="title flex justify-center p-1 text-2xl 
            text-center mt-4 font-bold">
          <h3 className="mt-1 text-gray-900 text-xl">{dataItem.question}</h3>
          <span className="ml-4 text-3xl" >+</span>
        </div>
        {
          enableMultiSelection ? 
          multipleId.indexOf(dataItem.id) !== -1 &&(
           <div className="answer p-2 text-center justify-center
          text-gray-900  relative  top-5 font-bold h-52">{dataItem.answer}</div>
          ) 
           : selected === dataItem.id 
          && (
          <div className="answer p-2 text-center justify-center
           text-gray-900  relative  top-5 font-bold h-52">{dataItem.answer}</div>
           )
        }
      </div>) :
      <div>No data found !</div>
      }
    </div>
  </div>
  </>
}
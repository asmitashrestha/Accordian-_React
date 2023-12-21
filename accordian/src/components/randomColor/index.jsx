import { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');
 
  const randomColorUtility = (length)=>{
    return Math.floor(Math.random()*length)
  }
  const generateHexColor = ()=>{
    let hexCode = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E']
    let hex = '#'
    for(let i = 0 ; i < 6 ; i++){
      hex +=hexCode[randomColorUtility(hexCode.length)] 
    }
    setColor(hex)
  }

  const generateRgbColor = ()=>{
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=>{
    if(colorType === 'rgb') generateRgbColor()
    else generateHexColor()
  },[colorType])
 

  return (
    <div style={{backgroundColor: color}} className={`color-container  flex h-screen w-screen justify-center`}>
      <div className="btn-collection mt-36">
        <button onClick={() => setColorType('hex')} className="btn-color py-3 px-4 mr-4 rounded">Create HEX Color</button>
        <button onClick={() => setColorType('rgb')} className="btn-color py-3 px-4 mr-4 rounded">Create RGB Color</button>
        <button onClick={colorType === 'hex'
        ? generateHexColor 
        : generateRgbColor
      } 
        className="btn-color py-3 px-4 mr-4 rounded">Generate random color</button>
        <div className="flex text-white text-36">
           <h3 className="mt-9 font-bold text-2xl text-white">{colorType==='rgb' ?"RGB Color": "HEX color"}</h3>
           <p className="mt-9 ml-48 font-bold text-3xl text-white">{color}</p>
        </div>
      </div>
    </div>
  );
}

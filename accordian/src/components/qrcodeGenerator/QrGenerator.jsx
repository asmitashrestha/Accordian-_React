import { useState } from "react"
import QRCode from "react-qr-code"

const QrGenerator = () => {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')
  
  const handleGenerateQrCode = ()=>{
    setQrCode(input)
  }
  return (
    <div className="qrcode-container">
      <h1 className=" flex justify-center text-center mt-9 font-bold text-2xl">QR Code Generator</h1>
      <div className="qr-generator  flex justify-center text-center mt-8">
        <input onChange={(e)=> setInput(e.target.value)}
        type="text" name="qr-code" placeholder="Enter your value here..." className="inp-box"/>
        <button disabled={input && input.trim()!== "" ? false : true} className="btn-generate" onClick={handleGenerateQrCode}>Generate Code</button>
      </div>
      <div>
        <QRCode id="qr-code-value" className="qr-code"  value={qrCode} size={300} bgColor="#f0e7e7" />
      </div>
    </div>
  )
}

export default QrGenerator

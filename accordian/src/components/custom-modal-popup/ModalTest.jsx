import React, { useState } from 'react'
import Modal from './Modal';

const ModalTest = () => {
  const [showModelPopup, setShowModelPopup] = useState(false);

  const handleToggleModalPopup = () =>{
    setShowModelPopup(!showModelPopup)
    console.log(showModelPopup);
  }


  return (
    <div className='open-modal'>
      <button onClick={handleToggleModalPopup}  className='bg-blue-600 px-4 py-4 text-white text-lg font-bold mt-3 rounded hover:bg-white hover:text-blue-600'>Open Modal Popup
      </button>
      {
        showModelPopup && <Modal/>
      }
    </div>
  )
}

export default ModalTest

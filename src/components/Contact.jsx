import React from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
    const navigation = useNavigate()
  return (
    <div>
      Contact
      <button onClick={()=>navigation(-1)}>Back</button>
    </div>
  )
}

export default Contact

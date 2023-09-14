import React from 'react'
import {AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube,} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center '> 
     <div className='d-flex gap-4 align-items-center pt-5 pb-4'> 
      <AiFillFacebook size={30}/>
      <AiOutlineInstagram size={30}/>
      <AiOutlineTwitter size={30}/>
      <AiFillYoutube size={30}/>
    </div>
    <div className=''>
      <ul className='d-flex gap-5'style={{textDecoration:"none",listStyle:"none",fontWeight:"500"}}>
        <li>Condition of use</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </ul>
    </div>
    <p style={{fontSize:"12px", color:"#6B7280", paddingTop:"25px"}}>
© 2021 MovieBox by Adriana Eka Prayudha  </p>
    </div>
  )
}

export default Footer

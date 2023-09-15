import React, { useState } from "react";
import logo from "../../public/Images/tv.png";
import { BiHomeAlt2, BiCameraMovie } from "react-icons/bi";
import { PiTelevisionLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import {MdLogout} from "react-icons/md"
import { Link } from "react-router-dom";

const Aside = () => {

  return (
    <>
    
    
    <div className=" aside-nav pt-4" style={{ border:"2px solid #0000004D", borderTopRightRadius:"30px",borderBottomRightRadius:"30px", height:"100vh",position:"fixed", width:"20%"}}>
       
     <Link style={{textDecoration:"none", color:"black"}} to="/" > <div className="d-flex align-items-center justify-content-around">
        <img src={logo} alt="" />
        <h3>MovieBox</h3>
      </div>
      </Link>
      <div className="pt-5">

     <Link style={{textDecoration:"none", color:"black"}} to="/" >  <div className="hovered-div d-flex pt-5 align-items-center ps-4 gap-3" >
  <BiHomeAlt2 style={{ height: "40px", width: "20px" }} />
  <h5>Home</h5>
</div> </Link>

        <div className="hovered-div d-flex pt-4 align-items-center ps-4  gap-3">
          <BiCameraMovie style={{ height: "40px", width: "20px" }} />
          <h5>Movies</h5>
        </div>
        <div className="hovered-div  d-flex pt-4 align-items-center ps-4 gap-3">
          <PiTelevisionLight style={{ height: "40px", width: "20px" }} />
          <h5>TV Series</h5>
        </div>
        <div className="hovered-div d-flex pt-4 align-items-center ps-4 gap-3">
          <CiCalendarDate style={{ height: "40px", width: "20px" }} />
          <h5>Upcoming</h5>
        </div>
      </div>
      <div className="m-3  p-4 d-flex flex-column justify-content-center align-items-center " style={{border: "1px solid #BE123CB2",borderRadius:"15px", backgroundColor:"#F8E7EB66"}}>
    <h6 className=" " style={{width:"150px"}}>Play movie quizes
and earn
free tickets</h6>
    <p>50k people are playing
now</p>
<button className=" p-2 mb-3" style={{backgroundColor:"#BE123C33", color:"#BE123C",border:"none",borderRadius:"10px", fontSize:"12px"}}>start playing</button>
      </div>
      <div className="hovered-div d-flex pt-5 align-items-center ps-4 gap-3">
        <MdLogout style={{ height: "40px", width: "20px" }}/>
        <h5>log out</h5>
      </div>
    </div>
    </>
  );
};

export default Aside;

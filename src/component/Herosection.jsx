import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/Images/Logo.png";
import { BiPlayCircle } from "react-icons/bi";
import axios from "axios";
import request from "../Request";

const Herosection = () => {
  const [latestposts, setLastestPosts] = useState([]);
  const latestpost =
    latestposts[Math.floor(Math.random() * latestposts.length)];

  useEffect(() => {
    axios.get(request.requestTopRated).then((response) => {
      const api = response.data;
      console.log(api);
      setLastestPosts(api.results);
    });
  }, []);

  if (latestpost === 0) {
    return null; // Render nothing until data is fetched
  }

  // console.log("latest", latestpost.title);
  // Check if latestpost[1] exists before trying to access its properties
  const title = latestpost?.title;
  const overview = latestpost?.overview;

  const backgroundImage = latestpost
    ? `https://image.tmdb.org/t/p/original/${latestpost.backdrop_path}`
    : "";

  return (
    <section
      className="main"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        position: "relative",
      }}
    >
      <div
        className=""
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
          backgroundColor: "black",
          opacity: "50%",
          left: "0",
        }}
      ></div>
      <div className="container " style={{ position: "relative" }}>
        <div
          className="nav-div d-flex justify-content-between align-items-center pt-3"
          style={{}}
        >
          <img src={logo} alt="" />
          <div className="nav-body"
            style={{
              border: "1px solid white",
              borderRadius: "5px",
              display: "flex",
              gap: "1rem",
              alignItems:"center",
              padding:"5px",
            }}
          >
            <div className="nav-input">
            <input
              style={{
                outline: "none",
                backgroundColor: "transparent",
                color: "white",
                width: "300px",
                border:"none"
              }}
              type="text"
              placeholder ="What do you want to watch?"
             
            />
            <BiSearch style={{ color: "white" }} />
            </div>
           
          </div>

          <div className="  ">
            <button
              style={{
                background: "none",
                color: "white",
                border: "none",
                marginRight: "20px",
                fontSize: "20px",
              }}
            >
              Sign in
            </button>

            <RxHamburgerMenu
              style={{
                backgroundColor: "red",
                borderRadius: "10px",
                fontSize: "24px",
              }}
            />
          </div>
        </div>

        <div className="mt-5" style={{ color: "white" }}>
          <h1>{title}</h1>
<div style={{width:"40%"}}>
          <p className="text-wrap" style={{ width: "100%" }}>
            {overview}
          </p>
          </div>
          <button
            className="p-2"
            style={{ backgroundColor: "#BE123C", color: "white" }}
          >
            {" "}
            <BiPlayCircle /> WATCH TRAILER
          </button>
        </div>
      </div>
      <div className="nav-input-mobile" style={{display:"none"}}>
            <input
              style={{
                outline: "none",
                backgroundColor: "transparent",
                color: "white",
                width: "300px",
                border:"none"
              }}
              type="text"
              placeholder ="What do you want to watch?"
             
            />
            <BiSearch style={{ color: "white" }} />
            </div>
    </section>
  );
};

export default Herosection;

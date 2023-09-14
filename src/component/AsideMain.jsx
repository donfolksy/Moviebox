import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTicket } from "react-icons/gi";
import picture from '../../public/Images/picture.png'
const AsideMain = ({
  postalImage,
  title,
  release_date,
  runtime,
  overview,
  genres,
}) => {
  return (
    <div className="m-4">
      <img
        src={`https://image.tmdb.org/t/p/original/${postalImage}`}
        style={{ width: "100%", height: "50%" }}
        alt=""
      />
      <div className="d-flex align-items-center gap-2">
        <h1 className="" data-testid="movie-title">{title}</h1>
        <p data-testid="movie-release-date">{release_date}</p>
        <p data-testid="movie-runtime">{runtime}</p>
      </div>
      <div className="d-flex">
      <div>
      <p data-testid="movie-overview">{overview}</p>
      <div className="d-flex gap-5">
        <h6>Genres: {genres}</h6>
      </div>
      </div>
      <div className="d-flex flex-column" style={{justifyContent:"flex-end"}}>
        <div
          className="d-flex align-items-center p-2 gap-2 justify-content-center   "
          style={{ backgroundColor: "#BE123C", color: "white",width:"100%",borderRadius:"10px" }}
        >
          <GiTicket className="" size={25} />
          <p className="pt-2" style={{fontSize:"20px"}}>See Showtimes</p>
        </div>

        <div
          className="d-flex align-items-center mt-4 p-2 gap-2 justify-content-center "
          style={{ backgroundColor: "#BE123C33",width:"100%",borderRadius:"10px" }}
        >
          <RxHamburgerMenu className="" size={25}/>
          <p className="pt-2" style={{fontSize:"20px"}}>More watch options</p>
        </div>

        <img src={picture} alt=""className="pt-4" style={{width:"300px"}}/>
      </div>
    </div>
    </div>
  );
};

export default AsideMain;

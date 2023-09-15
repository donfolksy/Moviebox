import React, { useEffect, useState } from "react";
import post from "../../public/Images/PosterImage.png";
import axios from "axios";
import request from "../Request";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
const Featured = () => {
  const containerStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "400px",
  };

  const [latestposts, setLastestPosts] = useState([]);
  const [showMovieLimit, setShowMovieLimit] = useState(10);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {

 // Load the favorites from local storage when the component mounts
 const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
 setFavorites(storedFavorites);

    axios.get(request.requestTopRated).then((response) => {
      const api = response.data.results;
      //   console.log(api);
      setLastestPosts(api);
      setVisibleMovies(api.slice(0, showMovieLimit));
    });
  }, []);

  // Function to toggle showing more or fewer movies
  const toggleMovies = () => {
    setShowMore(!showMore);

    if (showMore) {
      setVisibleMovies(latestposts);
    } else {
      setVisibleMovies(latestposts.slice(0, showMovieLimit));
    }
  };

  //   use state and function for favorite
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    // Check if the movie is already in favorites
    const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

    if (isFavorite) {
      // Remove the movie from favorites
      const updatedFavorites = favorites.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      setFavorites(updatedFavorites);
    } else {
      // Add the movie to favorites
      setFavorites([...favorites, movie]);
    }

    // Save updated favorites to local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="container" style={{}}>
      <div className="d-flex justify-content-between mt-5 ">
        <h3>Featured Movie</h3>
        {showMovieLimit < latestposts.length && (
          <p
            onClick={toggleMovies}
            className=""
            style={{ color: "red", cursor: "pointer" }}
          >
            {showMore ? "see more >" : "see less <"}
          </p>
        )}
      </div>
      <div className="movie-grid">
        {visibleMovies.map((movie) => (
          <div style={{ position: "relative" }}>
            <Link
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className=" mt-4" data-testid=" movie-card " key={movie.id}>
                <div
                  className=""
                  style={{
                    ...containerStyle,
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.poster_path})`,
                  }}
                  data-testid="movie-poster"
                ></div>
                <p
                  data-testid="movie-release-date"
                  style={{ fontSize: "11px" }}
                >
                  {movie.release_date}
                </p>

                <h6 data-testid="movie-title">{movie.title}</h6>
                <p style={{ fontSize: "11px" }}>{movie.vote_average} / 10</p>
              </div>
            </Link>
            {/* favorite icon */}
            <div
              className="d-flex justify-content-center align-items-center mt-2"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                // left:"",
                bottom: "0",
                zIndex: "100",
                borderRadius: "50px",
                backgroundColor: "#F3F4F680",
                width: "40px",
                height: "40px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(movie);
              }}
            >
              {favorites.some((favMovie) => favMovie.id === movie.id) ? (
                <BsSuitHeartFill size={25} style={{ color: "red" }} />
              ) : (
                <BsSuitHeartFill size={25} style={{ color: "#D1D5DB" }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

// src/MovieDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AsideMain from "./AsideMain";
import Aside from "./Aside";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = "dfff82e02c4189c6808144c8d2586ed9";
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    axios.get(apiUrl).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex">
      <Aside />
      <AsideMain
        postalImage={movie.backdrop_path}
        title={movie.title}
        release_date={movie.release_date}
        runtime={movie.runtime}
        overview={movie.overview}
        genres={movie.genres.map((genre) => genre.name)}
      />
    </div>
  );
};

export default MovieDetails;

// src/components/MovieCard.jsx
// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.time} minutes</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link> {/* Dynamic Link */}
    </div>
  );
};

export default MovieCard;

// src/pages/Movie.jsx
// src/pages/Movie.jsx
// src/pages/Movie.jsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'; // Import NavBar
import { useParams } from 'react-router-dom'; // Use useParams to access movie ID from URL

const Movie = () => {
  const { id } = useParams();  // Get the movie id from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)  // Fetch movie data by ID
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />  {/* Make sure NavBar is rendered here */}
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;

// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';  // Import the NavBar component
import { Link } from 'react-router-dom';  // Import Link for navigation

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')  // Fetch movies from the json-server
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <NavBar />  {/* Render the NavBar component */}
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>Loading...</p>
        ) : (
          movies.map(movie => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>  {/* Change h3 to h2 */}
              <Link to={`/movie/${movie.id}`}>View Info</Link>  {/* Change "View Details" to "View Info" */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

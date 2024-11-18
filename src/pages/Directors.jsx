// src/pages/Directors.jsx
// src/pages/Directors.jsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar
import { Link } from 'react-router-dom'; // Optional, in case you want to link director's movies

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/directors')
      .then(response => response.json())
      .then(data => setDirectors(data));
  }, []);

  return (
    <div>
      <NavBar /> {/* Ensure NavBar is here */}
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;

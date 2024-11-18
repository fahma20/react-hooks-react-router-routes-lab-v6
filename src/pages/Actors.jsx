// src/pages/Actors.jsx
// src/pages/Actors.jsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';  // Import NavBar

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/actors') // Adjust the URL if needed
      .then(response => response.json())
      .then(data => setActors(data));
  }, []);

  return (
    <div>
      <NavBar /> {/* Ensure NavBar is here */}
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;

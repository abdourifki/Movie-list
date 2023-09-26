import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import moviesData from '../Data/moviesData';
import './MovieList.css'; 

function MovieList() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredMovies = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredMovies);
  }

  return (
    
    <div>
        
      <div className='container'>
        <h1>Liste des Films</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className='container1'>
        <ul>
        {moviesData.map(movie => (
  <li key={movie.id} className='movie-card'>
    <Link to={`/trailer/${movie.id}`}>
      <img className='image' src={movie.image} alt={movie.title} />
    </Link>
    <h2>{movie.title}</h2>
    <p>Genre : {movie.genre}</p>
    <p>Année : {movie.year}</p>
    <p>Évaluation : {movie.rating}</p>
  </li>
))}    
        </ul>
      </div>
      
    </div>
  );
  
}

export default MovieList;

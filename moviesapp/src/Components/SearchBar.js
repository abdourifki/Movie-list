import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Appeler la fonction onSearch à chaque changement
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Rechercher un film..." 
        value={query} 
        onChange={handleInputChange} 
      />
    </div>
  );
}

export default SearchBar;

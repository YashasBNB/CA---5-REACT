// Search.jsx
import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    // Add logic for handling the search query as needed
  };

  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import { fetchBooks } from './Api';
import Navbar from '../Navbar';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderBookDetails = (book) => {
    switch (book.genre) {
      case 'Fiction':
        return <p>This is a fiction book.</p>;
      case 'Non-fiction':
        return <p>This is a non-fiction book.</p>;
      // Add more cases as needed
      default:
        return <p>No genre information available.</p>;
    }
  };

  return (
    <div>
        <Navbar/>
      <input
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <div>{book.title}</div>
            {renderBookDetails(book)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
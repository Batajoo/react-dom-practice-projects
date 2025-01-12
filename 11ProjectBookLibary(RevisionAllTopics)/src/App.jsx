// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './contexts/BookContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
import Statistics from './components/Statistics';
import Settings from './components/Settings';

const App = () => {
  return (
    <ThemeProvider>
      <BookProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/add" element={<AddBook />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </Router>
      </BookProvider>
    </ThemeProvider>
  );
};

export default App;

// contexts/BookContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const BookContext = createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload);
    case 'UPDATE_BOOK':
      return state.map(book => 
        book.id === action.payload.id ? action.payload : book
      );
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localBooks = localStorage.getItem('books');
    return localBooks ? JSON.parse(localBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);

// contexts/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';

const BookList = () => {
  const { books } = useBooks();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map(book => (
        <Link 
          key={book.id} 
          to={`/book/${book.id}`}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold mb-2 dark:text-white">{book.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{book.author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {book.status === 'reading' ? '📖 Currently Reading' : 
             book.status === 'completed' ? '✅ Completed' : '📚 Want to Read'}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BookList;

// components/AddBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';

const AddBook = () => {
  const navigate = useNavigate();
  const { dispatch } = useBooks();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
    status: 'toRead'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      payload: {
        ...bookData,
        id: Date.now().toString(),
        dateAdded: new Date().toISOString()
      }
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={bookData.title}
          onChange={(e) => setBookData({...bookData, title: e.target.value})}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>
      {/* Add similar input fields for author, description, and status */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;

// components/BookDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, dispatch } = useBooks();
  const book = books.find(b => b.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleDelete = () => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">{book.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-2">By {book.author}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{book.description}</p>
      <div className="flex space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default BookDetails;

import React, { useEffect, useState } from 'react';
import api from '../api';
import BookCard from '../components/BookCard';
import HeroBanner from "../components/HeroBanner";

export default function Home() {


  const [books, setBooks] = useState([]);
  useEffect(() => {
    api.get('/books/featured').then(r => setBooks(r.data)).catch(e => console.error(e));
  }, []);


  return (
    <>
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map(b => <BookCard key={b._id} book={b} />)}
        </div>
      </div>
    </>

  );
}
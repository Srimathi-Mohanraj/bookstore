import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App(){
return (
<div className="app-root">
<Header />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/books" element={<Books />} />
<Route path="/contact" element={<Contact />} />
<Route path="/book/:id" element={<BookDetails />} />
<Route path="/cart" element={<Cart />} />
</Routes>
</main>
<Footer />
</div>
);
}
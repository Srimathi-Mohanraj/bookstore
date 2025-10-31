// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  // Normalize the image source:
  // - If book.image is a full URL, use it
  // - If it's a filename (book1.jpeg or book1), build the correct PUBLIC_URL path
  // - If missing, use placeholder
  const getImageSrc = (img) => {
    if (!img) return `${process.env.PUBLIC_URL || ''}/assets/placeholder.jpg`;
    if (typeof img === 'string' && img.startsWith('http')) return img;

    // treat as filename possibly w/out extension
    const hasExt = /\.(jpe?g|png|webp|gif)$/i.test(img);
    const filename = hasExt ? img : `${img}.jpeg`; // assume .jpeg if missing
    return `${process.env.PUBLIC_URL || ''}/assets/${filename}`;
  };

  const src = getImageSrc(book.image);

  const handleAdd = (e) => {
    e.preventDefault(); // if inside a Link
    addToCart(book, 1); // adds one item, CartContext will merge if already present
  };

  return (
    <div className="card-shadow flex flex-col bg-white rounded-lg overflow-hidden">
      <Link to={`/book/${book._id}`} className="block">
        <img
          className="w-full h-56 object-cover"
          src={src}
          alt={book.title}
          onError={(e) => { e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/assets/placeholder.jpg`; }}
        />
      </Link>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.author}</p>
        <p className="text-gray-700 mt-2 text-sm flex-1">
          {book.description?.slice(0, 120)}
          {book.description && book.description.length > 120 ? '...' : ''}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold">₹{book.price}</div>

          {/* Add to Cart button — keeps style consistent with your site */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAdd}
              className="px-3 py-1 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-700 transition"
              aria-label={`Add ${book.title} to cart`}
            >
              Add
            </button>

            <Link to={`/book/${book._id}`} className="px-3 py-1 border rounded text-sm">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

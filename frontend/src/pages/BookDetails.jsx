import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import { useCart } from '../context/CartContext';


export default function BookDetails(){
const { id } = useParams();
const [book, setBook] = useState(null);
const { addToCart } = useCart();


useEffect(()=>{
api.get(`/books/${id}`).then(r=>setBook(r.data)).catch(e=>console.error(e));
},[id]);


if(!book) return <div className="p-6">Loading...</div>;


return (
<div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<img className="w-full h-auto rounded-lg" src={`assets/${book.image}`} alt={book.title} />
</div>
<div className="md:col-span-2">
<h1 className="text-2xl font-bold">{book.title}</h1>
<h3 className="text-gray-600 mt-1">by {book.author}</h3>
<p className="mt-4 text-gray-700">{book.description}</p>
<div className="mt-4 text-2xl font-semibold">₹{book.price}</div>
<div className="mt-6 flex gap-3">
<button onClick={()=>addToCart(book,1)} className="btn-primary">Add to Cart</button>
<button onClick={()=>window.history.back()} className="px-4 py-2 border rounded-md">Back</button>
</div>
</div>
</div>
);
}
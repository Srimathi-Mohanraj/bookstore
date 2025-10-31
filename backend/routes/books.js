const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


// GET featured books
router.get('/featured', async (req, res) => {
try {
const books = await Book.find({ featured: true, available: true });
res.json(books);
} catch (err) {
res.status(500).json({ message: err.message });
}
});


// GET all books (optional) or available
router.get('/', async (req, res) => {
try {
const books = await Book.find({ available: true });
res.json(books);
} catch (err) {
res.status(500).json({ message: err.message });
}
});


// GET book details by id
router.get('/:id', async (req, res) => {
try {
const book = await Book.findById(req.params.id);
if (!book) return res.status(404).json({ message: 'Book not found' });
res.json(book);
} catch (err) {
res.status(500).json({ message: err.message });
}
});


module.exports = router;
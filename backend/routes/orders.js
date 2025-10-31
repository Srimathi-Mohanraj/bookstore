const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Book = require('../models/Book');


// Place an order
router.post('/', async (req, res) => {
try {
const { customerName, email, address, items } = req.body;
if (!items || items.length === 0) return res.status(400).json({ message: 'Cart empty' });


const total = items.reduce((s, it) => s + it.price * it.qty, 0);


const order = new Order({ customerName, email, address, items, total });
await order.save();


// Mark purchased books as not available (hide from home/featured)
for (const it of items) {
// optional: decrement quantity if you have stock field; here we just hide the book
await Book.findByIdAndUpdate(it.bookId, { available: false });
}


res.status(201).json({ message: 'Order placed', orderId: order._id });
} catch (err) {
console.error(err);
res.status(500).json({ message: err.message });
}
});


module.exports = router;
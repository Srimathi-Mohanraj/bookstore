const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
customerName: String,
email: String,
address: String,
items: [
{
bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
title: String,
price: Number,
qty: Number
}
],
total: Number,
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Order', OrderSchema);
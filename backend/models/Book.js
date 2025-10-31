const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
title: String,
author: String,
price: Number,
description: String,
image: String, // URL or base64
featured: { type: Boolean, default: false },
available: { type: Boolean, default: true }
});


module.exports = mongoose.model('Book', BookSchema);
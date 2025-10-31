const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const booksRouter = require('./routes/books');
const ordersRouter = require('./routes/orders');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/books', booksRouter);
app.use('/api/orders', ordersRouter);


const PORT = process.env.PORT || 5000;

console.log('MONGODB_URI =>', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log('Server on http://localhost:' + PORT));
})
.catch(err => console.error(err));
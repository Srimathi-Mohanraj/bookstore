
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const booksRouter = require('./routes/books');   
const ordersRouter = require('./routes/orders'); 

const app = express();
app.use(express.json());

const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({
  origin: FRONTEND,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
}));


app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));


if (booksRouter) app.use('/api/books', booksRouter);
if (ordersRouter) app.use('/api/orders', ordersRouter);


app.get('/', (req, res) => res.send('Server is running'));

// Start server after DB connection
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGODB_URI;

if (!MONGO) {
  console.error('MONGODB_URI is not set in environment');
  process.exit(1);
}

mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

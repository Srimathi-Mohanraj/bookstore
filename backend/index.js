
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const booksRouter = require('./routes/books');   
const ordersRouter = require('./routes/orders'); 

const app = express();
app.use(express.json());


const envAllowed = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

  function isVercelOrigin(origin) {
  try {
    return origin && origin.endsWith('.vercel.app');
  } catch { return false; }
}


const corsOptions = {
  origin: function(origin, callback) {
    
    if (!origin) return callback(null, true);

    if (envAllowed.includes(origin)) return callback(null, true);

    if (isVercelOrigin(origin)) return callback(null, true);
    console.warn('CORS blocked origin:', origin);
    return callback(null, false);
  },
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: true
};


// apply CORS
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));


if (booksRouter) app.use('/api/books', booksRouter);
if (ordersRouter) app.use('/api/orders', ordersRouter);

app.get('/', (req, res) => res.send('Server is running'));


app.use((err, req, res, next) => {
  if (err && /CORS policy/.test(err.message)) {
    return res.status(403).json({ error: err.message });
  }
  next(err);
});

// start server after connecting to DB
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

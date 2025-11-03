
const mongoose = require('mongoose');
require('dotenv').config();

async function run() {
  try {
    const MONGO = process.env.MONGODB_URI;
    if (!MONGO) throw new Error('MONGODB_URI not set');

    await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });

 
    const Book = mongoose.model('books', new mongoose.Schema({}, { strict: false }), 'books');

    const backendUrl = process.env.BACKEND_PUBLIC_URL;
    if (!backendUrl) throw new Error('BACKEND_PUBLIC_URL not set');

    const docs = await Book.find({});
    for (const doc of docs) {
      if (doc.image && typeof doc.image === 'string' && doc.image.includes('localhost')) {
        const fileName = doc.image.split('/').pop(); // last segment
        doc.image = `${backendUrl.replace(/\/$/,'')}/assets/${fileName}`;
        await doc.save();
        console.log('Updated', doc._id.toString());
      }
    }

    console.log('✅ All done');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

run();

require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const books = [
  {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    price: 999,
    description: 'Kids most liked book full of adventure.',
    image: 'https://bookstore-33co.vercel.app/assets/book1.jpeg',
    featured: true,
    available: true
  },
  {
    title: 'Lean Startup (L)',
    author: 'Eric Ries',
    price: 359,
    description: 'How Constant Innovation Creates Radically Successful Businesses.',
    image: 'https://bookstore-33co.vercel.app/assets/book2.jpeg',
    featured: true,
    available: true
  },
  {
    title: 'AI for Everyone',
    author: 'Sridhar Seshadri & Shreeram Iyer',
    price: 299,
    description: 'You can deeply understand AI.',
    image: 'https://bookstore-33co.vercel.app/assets/book3.jpeg',
    featured: true,
    available: true
  },
  {
    title: 'Thank You for Leaving',
    author: 'Rithvik Singh',
    price: 214,
    description: 'Learning to be okay with saying goodbye.',
    image: 'https://bookstore-33co.vercel.app/assets/book4.jpeg',
    featured: true,
    available: true
  },
  {
    title: 'She & Hers',
    author: 'Manav Kaul',
    price: 2345,
    description: 'What really is the true definition of love?',
    image: 'https://bookstore-33co.vercel.app/assets/book5.jpeg',
    featured: true,
    available: true
  },
  {
    title: 'A Guardian and a Thief',
    author: 'Megha Majumdar',
    price: 453,
    description: 'Oprah Winfrey’s Book Club Pick | Longlisted for the National Book Award.',
    image: 'https://bookstore-33co.vercel.app/assets/book6.jpeg',
    featured: true,
    available: true
  },
  {
    title: 'The Loneliness of Sonia and Sunny',
    author: 'Kiran Desai',
    price: 735,
    description: 'A Diaspora Fiction on Belonging, and Modern Relationships.',
    image: 'https://bookstore-33co.vercel.app/assets/book7.jpeg',
    featured: true,
    available: true
  },
  {
    title: 'Every Day I Read',
    author: 'Hwang Bo-reum',
    price: 250,
    description: 'A reflection on the joy and meaning of reading.',
    image: 'https://bookstore-33co.vercel.app/assets/book8.jpeg',
    featured: true,
    available: true
  }
];

// Correct connection syntax
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected for seeding...');
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log('✅ Database seeded successfully with books');
    process.exit(0);
  })
  .catch(err => console.error(' Error seeding database:', err));

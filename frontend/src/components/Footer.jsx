
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            {/* Book icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.5 17A2.5 2.5 0 014 14.5V6a2 2 0 012-2h14v15H6.5z" />
            </svg>
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" />
              </svg>
              Home
            </Link></li>

            <li><Link to="/books" className="hover:text-white flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 6v13a1 1 0 0 0 1 1h15V6H3zm17-2H5a1 1 0 0 0-1 1v1h18V5a1 1 0 0 0-1-1z" />
              </svg>
              Books
            </Link></li>

            <li><Link to="/contact" className="hover:text-white flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5L12 13 2 6.5V6z" />
                <path d="M2 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 6-10-6z" />
              </svg>
              Contact
            </Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            {/* Mail icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Contact
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M9 3v2m6-2v2m-9 4h12v10H6V9z" />
              </svg>
              support@bookstore.example
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5a2 2 0 0 1 2-2h2l2 4H6l-1.2 2.4c.6 1.6 1.6 3.2 2.8 4.4a12.1 12.1 0 0 0 4.4 2.8L15 15h4l2 2v2a2 2 0 0 1-2 2 17 17 0 0 1-7.5-1.7 17 17 0 0 1-5.8-4.5A17 17 0 0 1 2 8a2 2 0 0 1 1-3z" />
              </svg>
              +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            {/* Share icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8m8-8v8m8-8v8M4 8V4m8 4V4m8 4V4" />
            </svg>
            Follow
          </h2>

          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-blue-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 3h-2.4v7C18.3 21.1 22 17 22 12z" />
              </svg>
              Facebook
            </a>

            <a href="#" className="hover:text-pink-500 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5 2C4.5 2 2 4.5 2 7.5v9c0 3 2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5v-9C22 4.5 19.5 2 16.5 2h-9zm7 3h2l.3 2h-2.6L14.5 5zm1.5 2.7c.7 0 1.3.6 1.3 1.3S19.7 10.3 19 10.3 17.7 9.7 17.7 9s.6-1.3 1.3-1.3zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
              </svg>
              Instagram
            </a>

            <a href="#" className="hover:text-sky-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.5.58-2.26.69a3.94 3.94 0 0 0 1.72-2.18c-.8.47-1.65.81-2.56.98A3.93 3.93 0 0 0 16.5 4a3.95 3.95 0 0 0-3.95 3.95c0 .31.03.61.1.89C8.34 8.67 5.1 6.95 3 4.2a3.94 3.94 0 0 0-.53 1.98c0 1.37.7 2.57 1.75 3.28a3.96 3.96 0 0 1-1.8-.5v.05c0 1.91 1.36 3.51 3.17 3.87a3.9 3.9 0 0 1-1.79.07c.51 1.59 2 2.76 3.77 2.8A7.91 7.91 0 0 1 2 19.55a11.18 11.18 0 0 0 6.05 1.77c7.27 0 11.24-6.02 11.24-11.24 0-.17-.01-.34-.02-.51A8.06 8.06 0 0 0 22.46 6z" />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 BookStore — All Rights Reserved
      </div>
    </footer>
  );
}

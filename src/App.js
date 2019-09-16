import React from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './Footer';

function Navbar() {
  return (
    <nav>
      <h1>Hello World!</h1>
    </nav>
  );
}

function MainContent() {
  return (
    <main>
      <p>This is where most of my content will go...</p>
    </main>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

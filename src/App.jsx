import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Your main content/routes will go here */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
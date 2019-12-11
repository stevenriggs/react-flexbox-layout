import React from 'react';
import './App.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Records from './components/records/Records';

function App() {
  return (
    <div className='vh-100 d-flex flex-column'>
      <div className='d-flex flex-column flex-grow-0 flex-shrink-0'>
        <Header />
      </div>
      <div className='d-flex flex-column flex-grow-1 flex-shrink-1 h-100'>
        <Records />
      </div>
      <div className='d-flex flex-column flex-grow-0 flex-shrink-0'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Records from './components/records/Records';

function App() {
  return (
    <div className='d-flex flex-column vh-100'>
      <div className='d-flex flex-grow-0'>
        <Header />
      </div>
      <div className='d-flex flex-grow-1'>
        <Records />
      </div>
      <div className='d-flex flex-grow-0'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

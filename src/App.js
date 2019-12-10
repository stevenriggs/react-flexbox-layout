import React from 'react';
import './App.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Records from './components/records/Records';

function App() {
  return (
    <div className='fill-viewport d-flex flex-column'>
      <div>
        <Header />
      </div>
      <div className='flex-grow-1'>
        <Records />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

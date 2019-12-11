import React from 'react';
import './App.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Records from './components/records/Records';

function App() {
  return (
    <div className='container-fluid m-0 p-0 d-flex flex-column vh-100'>
      <div className='container-fluid m-0 p-0 d-flex'>
        <Header />
      </div>
      <div className='container-fluid m-0 p-0 d-flex flex-grow-1'>
        <Records />
      </div>
      <div className='container-fluid m-0 p-0 d-flex'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

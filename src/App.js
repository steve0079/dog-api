import React from 'react';
import './App.css';

import Header from './components/Header';
import Display from './components/Display';
import Carousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Carousel />
    </div>
  );
}

export default App;

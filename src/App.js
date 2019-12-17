import React from 'react';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainBlock from './components/main-block/main-block';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <Footer />

      <img src="" className="avatar" alt="It's me" />
    </div>
  );
}

export default App;

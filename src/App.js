import React from 'react';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
// import MainBlock from './components/main-block/main-block';
import Sidebar from './components/sidebar/sidebar';

import { BrowserRouter, Switch } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        {/* <MainBlock /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

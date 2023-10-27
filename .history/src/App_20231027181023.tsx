import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//Common Components
import Header from './components/header';

//Styles 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;

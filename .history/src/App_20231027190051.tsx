import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//Common Components
import Header from './components/header';

//content components
import Home from './content/home';

//Styles and Fonts\
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      {/* Client-Side Routing */}
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/home"  element={<Home />} />
      </Routes>
     
     <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

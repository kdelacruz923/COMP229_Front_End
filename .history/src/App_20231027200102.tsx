import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//Common Components
import Header from './components/header';

//content components
import Home from './content/home';
import About from './content/about';
import Projects from './content/project';
import Services from './content/services';
import Contact from './content/contact';

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
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
      </Routes>
     
     <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

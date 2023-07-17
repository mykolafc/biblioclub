import Navbar from './navbar';
import Home from './Home';
import Membres from './Membres';
import Livre from './Livre';
import Reunion from './Reunion';
import Vote from './Vote';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';

function App() {


  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="content">
            <Routes>
              <Route path='/home' element={<Home />}/>
              <Route path='/membres' element={<Membres />}/>
              <Route path='/livre-du-mois' element={<Livre />}/>
              <Route path='/reunion' element={<Reunion />}/>
              <Route path='/vote' element={<Vote />}/>
            </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

import Navbar from './navbar';
import Home from './Home';
import Membres from './Membres';
import Livre from './Livre';
import Reunion from './Reunion';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/membres' element={<Membres />}/>
              <Route path='/livre-du-mois' element={<Livre />}/>
              <Route path='/reunion' element={<Reunion />}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;

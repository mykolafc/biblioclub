import Navbar from './navbar';
import Home from './Home';
import Membres from './Membres';
import Livre from './Livre';
import Reunion from './Reunion';
import Vote from './Vote';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Rediscover your passion for reading',
        homeText: 'On the first Thursday of every month, find us in the reading corner of your local Ottawa Public Library branch.',
        vote: 'Vote on next month\'s book right now!',
      }
    },
    fr: {
      translation: {
        welcome: 'Redécouvrez votre passion pour la lecture',
        homeText: 'Le premier jeudi du mois, trouvez-nous dans le coin de lecture de votre succursale de la Bibliothèque publique d\'Ottawa.',
        vote: 'Votez sur le prochain livre du mois dès maintenant!',
      }
    }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false
  }
});


function App() {

  return (
    <I18nextProvider>
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
    </I18nextProvider>
  );
}

export default App;
